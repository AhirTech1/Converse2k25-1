import React from "react";
import "../Teams.css";
import "../Common.css";
import TeamSection from "../../constants/TeamSection";

const facultyCoordinators = [
    { name: "Prof. Hiren Vavaiya", image: "/images/HirenVavaiya.png" },
    { name: "Prof. Ankit Patel", image: "/images/AnkitPatel.png" },
    { name: "Prof. Karishma Desai", image: "/images/KarishmaDesai.png" },
    { name: "Prof. Nitya Komalan", image: "/images/NityaKomalan.png" },
];

const studentCoordinators = [
    { name: "Ayush Polara", image: "/images/AyushPolara.png" },
    { name: "Mitarsh Savaliya", image: "/images/MitarshSavaliya.png" },
    { name: "Shreya Chopra", image: "/images/ShreyaChopra.png" },
    { name: "Jenish Sonani", image: "/images/JenishSonani.png" },
    { name: "Harsh Maniya", image: "/images/HarshManiya.png" },
    { name: "Uttam Moradiya", image: "/images/UttamMoradiya.png" },
    { name: "Jensi Ghadiya", image: "/images/JensiGhadiya.png" },
];

function CoreTeam() {
    return (
        <section className="core-team-section bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-hidden relative before:relative before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10 py-16 px-4 sm:px-6 md:px-12">
            <div className="section-title max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    Converse <span className="text-purple-500">Core Team</span>
                </h2>

                <TeamSection
                    title="Faculty Coordinators"
                    members={facultyCoordinators}
                    gradientClass="faculty-coordinator-gradient"
                />

                <TeamSection
                    title="Student Coordinators"
                    members={studentCoordinators}
                    gradientClass="student-coordinator-gradient"
                />
            </div>
        </section>
    );
}

export default CoreTeam;
