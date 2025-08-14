import React from "react";
import "../Teams.css";
import "../Common.css";
import TeamSection from "../../constants/TeamSection";

const teamCoordinators = [
    { name: "Uttam Moradiya", image: "/images/UttamMoradiya.png" },
];

const teamMembers = [
    { name: "Ayush Vanani", image: "/images/AyushVanani.png" },
    { name: "Krushali Gohil", image: "/images/KrushaliGohil.png" },
    { name: "Vanshika Kapadiya", image: "/images/VanshikaKapadiya.png" },
    { name: "Palak Tank", image: "/images/PalakTank.png" },
    { name: "Sanchi Savani", image: "/images/SanchiSavani.png" },
    { name: "Namitha Yelugam", image: "/images/NamithaYelugam.png" },
    { name: "Nupur Sonware", image: "/images/NupurSonware.png" },
    { name: "Twisha Savani", image: "/images/TwishaSavani.png" },
    { name: "Kangana Gupta", image: "/images/KanganaGupta.png" },
    { name: "Krishna Dabhi", image: "/images/KrishnaDabhi.png" },
];

function CoreTeam() {
    return (
        <section className="core-team-section bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-hidden relative before:relative before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10 py-16 px-4 sm:px-6 md:px-12">
            <div className="section-title max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    Converse <span className="text-purple-500">Core Team</span>
                </h2>

                <TeamSection
                    title="Team Coordinators"
                    members={teamCoordinators}
                    gradientClass="faculty-coordinator-gradient"
                />

                <TeamSection
                    title="Team Members"
                    members={teamMembers}
                    gradientClass="student-coordinator-gradient"
                />
            </div>
        </section>
    );
}

export default CoreTeam;
