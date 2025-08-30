import jwt from "jsonwebtoken";
import Person from "../models/user/person.js";
import { sendEmailForOneEvent, sendEmailForTeamEvent } from "../utils/sendMessage.js";
import { body, validationResult } from 'express-validator';

// Validation middleware for addedOneEvent
const validateOneEvent = [
    body('eventName').notEmpty().withMessage("Event name is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validation middleware for addedTeamEvent
const validateTeamEvent = [
    body('eventName').notEmpty().withMessage("Event name is required"),
    body('email').isArray({ min: 1, max: 2 }).withMessage("Email must be an array with 1 or 2 entries"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const addedOneEvent = async (req, res) => {
    try {
        const userId = req.userId;
        const { eventName } = req.body;

        const user = await Person.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.events.get(eventName) === true) {
            return res.status(400).json({ message: `Already registered for ${eventName}` });
        }

        const updatePath = `events.${eventName}`;
        const update = { [updatePath]: true };
        const updatedUser = await Person.findByIdAndUpdate(
            userId,
            { $set: update },
            {
                new: true,
                runValidators: true,
                // Use a transaction for atomicity in more complex scenarios
                // const session = await mongoose.startSession();
                // session.startTransaction();
                // try { ... }
            }
        );

        // Generate new JWT token with updated user
        const jwtToken = jwt.sign({ id: updatedUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        await sendEmailForOneEvent(updatedUser, eventName);

        res.status(200).json({
            success: true,
            message: `Registered for ${eventName}`,
            user: updatedUser,
            token: jwtToken,
        });
    } catch (error) {
        console.error("❌ Event registration error:", error);
        return res.status(500).json({ message: "Failed to register for event" });
    }
};

export const addedTeamEvent = async (req, res) => {
    try {
        const userId = req.userId;
        const { eventName, email } = req.body;

        // Find leader
        const leader = await Person.findById(userId);
        if (!leader) return res.status(404).json({ message: "Leader not found" });

        // Find all team members by email
        const members = await Person.find({ email: { $in: email } });
        if (members.length !== email.length) {
            return res.status(400).json({ message: "Some team members not found" });
        }

        // Final team (leader + members)
        const team = [leader, ...members];

        // Check if any already registered
        const alreadyRegistered = team.find(
            (person) => person.events.get(eventName) === true
        );
        if (alreadyRegistered) {
            return res.status(400).json({
                message: `${alreadyRegistered.fullName} is already registered for ${eventName}`,
            });
        }

        // Use a transaction to ensure all updates are atomic
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const updateFlagPath = `events.${eventName}`;
            const updateTeamPath = `events.${eventName}Team`;

            for (const person of team) {
                const teamWithoutSelf = team
                    .filter((p) => p.email !== person.email)
                    .map((p) => ({
                        member: p._id,
                        email: p.email,
                        fullName: p.fullName,
                    }));

                person.set(updateFlagPath, true);
                person.set(updateTeamPath, teamWithoutSelf);
                await person.save({ session });
            }

            await session.commitTransaction();
            session.endSession();

        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw error; // Re-throw the error to be caught by the outer catch block
        }

        for (const person of team) {
            sendEmailForTeamEvent(person, eventName, team).catch((err) => {
                console.error(
                    `❌ Failed to send email to ${person.email}: ${err.message}`
                );
            });
        }

        // Create updated JWT token for leader
        const token = jwt.sign({ id: leader._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.status(200).json({
            success: true,
            message: `Team registered for ${eventName}`,
            user: leader,
            token,
        });
    } catch (error) {
        console.error("❌ Team registration error:", error);
        res.status(500).json({ message: "Server error while registering team" });
    }
};

export const fetchEmails = async (req, res) => {
    try {
        const { eventName } = req.query;

        if (!eventName) {
            return res.status(400).json({ message: "Event name is required" });
        }

        const query = {};
        query[`events.${eventName}`] = false;

        const users = await Person.find(query).select("email");
        const emails = users.map((user) => user.email);

        res.status(200).json({
            success: true,
            event: eventName,
            unregisteredEmails: emails,
            count: emails.length,
        });
    } catch (error) {
        console.error("❌ Fetch emails error:", error);
        return res.status(500).json({ message: "Failed to fetch emails" });
    }
};