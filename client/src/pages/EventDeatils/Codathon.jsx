import React from "react";
import RegisterButtonFotTeam from "../../components/App/RegisterButtonFotTeam";
import { codathon } from "../../constants/eventNames";
import { PosterCodathon } from "../../assets";
import EventLayout from "../../components/Events/EventLayout";
import InfoCard from "../../components/Events/InfoCard";
import PersonList from "../../components/Events/PersonList";

function Codathon() {
    const eventDetails = [
        { label: "Event Name", value: "Codathon" },
        { label: "Date", value: "20 September 2024" },
        { label: "Time", value: "1:30 PM - 3:30 PM" },
        { label: "Duration", value: "2 hours" }
    ];

    const facultyCoordinators = [
        { name: "Prof. Ashish Kharvar" },
        { name: "Prof. Apurva Mandalyawala" },
        { name: "Prof. Mitul Patel" }
    ];

    const eventHeads = [
        { name: "Rahul Joshi", contact: "+91 82381 46212" },
        { name: "Mitul Chauhan", contact: "+91 79718 98263" }
    ];

    const volunteers = [
        { name: "Dharshit Patel" },
        { name: "Abhijeet Desai" },
        { name: "Aniket Patel" }
    ];

    return (
        <EventLayout
            eventName="Codathon"
            tagline="Showcase your coding skills in this thrilling competition"
            posterImage={PosterCodathon}
            registerButton={
                <RegisterButtonFotTeam event={codathon} min={1} max={2} />
            }
            eventDetails={eventDetails}
        >
            <InfoCard title="Description" color="blue">
                <p className="text-gray-300">
                    Codathon is a competitive programming event where participants showcase their problem-solving skills through multiple rounds of challenges. Test your coding abilities in MCQs, debugging, and development tasks.
                </p>
            </InfoCard>

            <InfoCard title="Rules & Structure" color="purple">
                <div className="space-y-2 text-gray-300">
                    <p className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>The event is team-based (max. 2 members)</span>
                    </p>
                    <p className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Participants must be from the same institute</span>
                    </p>
                    <p className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Languages allowed: C, C++, Java, Python</span>
                    </p>
                </div>

                <div className="mt-4">
                    <h4 className="font-semibold text-blue-300 mb-2">Rounds:</h4>
                    <div className="space-y-3">
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="font-medium text-blue-200">Round 1: MCQs on basic coding</p>
                            <p className="text-sm text-gray-400">45 minutes</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="font-medium text-blue-200">Round 2: Code Debugging</p>
                            <p className="text-sm text-gray-400">45 minutes</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="font-medium text-blue-200">Round 3: Code Development</p>
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

export default Codathon;