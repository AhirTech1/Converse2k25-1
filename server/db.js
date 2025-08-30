import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// A flag to check if the connection is already established
let isConnected = false;

/**
 * Connects to the MongoDB database using the connection string from .env.
 * This function is idempotent, meaning it will not create a new connection
 * if one already exists. It handles connection errors gracefully and exits
 * the application on failure.
 */
async function connectToDB() {
    if (isConnected) {
        console.log('Using existing MongoDB connection');
        return;
    }

    try {
        const mongoURI = process.env.CONNECTION_URL;
        if (!mongoURI) {
            throw new Error('CONNECTION_URL is not defined in the .env file.');
        }

        await mongoose.connect(mongoURI);
        isConnected = true;
        console.log('✅ MongoDB connected successfully!');
    } catch (err) {
        console.error('❌ Failed to connect to MongoDB:', err);
        // Exit the process with an error code on a critical failure
        process.exit(1);
    }
}

export default connectToDB;
