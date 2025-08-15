import React from "react";
import RegisterButton from "../../components/App/RegisterButton";
import { pyIt } from "../../constants/eventNames";
import { PosterPYIT } from "../../assets";
import EventLayout from "../../components/Events/EventLayout";
import InfoCard from "../../components/Events/InfoCard";
import PersonList from "../../components/Events/PersonList";

function PYIT() {
    const eventDetails = [
        { label: "Event Name", value: "PY-IT" },
        { label: "Date", value: "20 September 2025" },
        { label: "Time", value: "10:00 AM - 10:45 AM" },
        { label: "Duration", value: "45 Minutes" }
    ];

    const facultyCoordinators = [
        { name: "Prof. Mukesh Patel" },
        { name: "Prof. Vivaksha Jariwala" }
    ];

    const eventHeads = [
        { name: "Kruti Kikani", contact: "+91 87807 53117" },
        { name: "Shurti Kakadiya", contact: "+91 85300 58300" }
    ];

    const volunteers = [
        { name: "Tisha Chauhan" },
        { name: "Dhruvit Kuvadiya" },
        { name: "Priya Lathiya" },
        { name: "Granth Savaliya"}
    ];

    return (
        <EventLayout
            eventName="PY-IT"
            tagline="Show your skills, prove your potential."
            posterImage={PosterPYIT}
            registerButton={
                <RegisterButton event={pyIt} />
            }
            eventDetails={eventDetails}
        >
            <InfoCard title="Description" color="blue">
                <p className="text-gray-300">
                    PY-IT is a talent assessment event designed to test students through multiple evaluation stages. Compete individually in an aptitude test, sharpen your communication skills in a group discussion, and prove your potential in a personal interview to claim the winner’s spot.
                </p>
            </InfoCard>

            <InfoCard title="Rules & Structure" color="purple">
                <div className="space-y-2 text-gray-300">
                    <p className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Any students (from any branch/any semester) can take part individually.</span>
                    </p>
                    <p className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Final winners will be declared based on performance in round 3.</span>
                    </p>
                    <p className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Participants must bring their resumes for round 3.</span>
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Rounds:</h4>
                    <div className="space-y-3">
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="font-medium text-blue-200">Round 1: Aptitude Test</p>
                            <p className="text-sm text-gray-400">45 minutes</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="font-medium text-blue-200">Round 2: Group Discussion</p>
                            <p className="text-sm text-gray-400">30 minutes</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="font-medium text-blue-200">Round 3: Personal Interview</p>
                            <p className="text-sm text-gray-400">60 minutes</p>
                        </div>
                    </div>
                </div>
            </InfoCard>

            <InfoCard title="Event Team" color="green" columns={2}>
                <PersonList
                    title="Faculty Coordinators"
                    people={facultyCoordinators}
                />
                <PersonList
                    title="Event Heads"
                    people={eventHeads}
                    showContact={true}
                />
                <div className="md:col-span-2">
                    <PersonList
                        title="Volunteers"
                        people={volunteers}
                        isChip={true}
                    />
                </div>
            </InfoCard>
        </EventLayout>
    );
}

export default PYIT;