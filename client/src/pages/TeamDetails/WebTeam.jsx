import React from "react";
import "../Teams.css";
import "../Common.css";
import TeamSection from "../../constants/TeamSection";

const teamMembers = [
    { name: "Tilak Viradiya", image: "/images/TilakViradiya.png" },
    { name: "Mitul Tariwala", image: "/images/MitulTariwala.png" },
    { name: "Utsav Vachhani", image: "/images/UtsavVachhani.png" },
    { name: "Meet Patel", image: "/images/MeetPatel.png" },
    { name: "Keyur Moradiya", image: "/images/KeyurMoradiya.png" },
];

function WebTeam() {
    return (
        <section className="core-team-section bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-hidden relative before:relative before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10 py-16 px-4 sm:px-6 md:px-12">
            <div className="section-title max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    Converse <span className="text-purple-500">Core Team</span>
                </h2>

                <TeamSection
                    title="Student Coordinators"
                    members={teamMembers}
                    gradientClass="student-coordinator-gradient"
                />
            </div>
        </section>
    );
}

export default WebTeam;
