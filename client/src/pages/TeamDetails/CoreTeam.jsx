import React from "react";
import "../Teams.css";
import "../Common.css"

const facultyCoordinators = [
    { name: "Prof. Hiren Vavaiya", role: "Faculty Coordinator", image: "/images/HirenVavaiya.png" },
    { name: "Prof. AnkitPatel", role: "Faculty Coordinator", image: "/images/AnkitPatel.png" },
    { name: "Prof. Karishma Desai", role: "Faculty Coordinator", image: "/images/KarishmaDesai.png" },
    { name: "Prof. Nitya Komalan", role: "Faculty Coordinator", image: "/images/NityaKomalan.png" },
];

const studentCoordinators = [
    { name: "Ayush Polara", role: "Student Coordinator", image: "/images/AyushPolara.png" },
    { name: "Mitarsh Savaliya", role: "Student Coordinator", image: "/images/MitarshSavaliya.png" },
    { name: "Shreya Chopra", role: "Student Coordinator", image: "/images/ShreyaChopra.png" },
    { name: "Jenish Sonani", role: "Student Coordinator", image: "/images/JenishSonani.png" },
    { name: "Harsh Maniya", role: "Student Coordinator", image: "/images/HarshManiya.png" },
    { name: "Uttam Moradiya", role: "Student Coordinator", image: "/images/UttamMoradiya.png" },
    { name: "Jensi Ghadiya", role: "Student Coordinator", image: "/images/JensiGhadiya.png" },
];

function CoreTeam() {
    return (
        <section className="core-team-section py-16 px-4 sm:px-6 md:px-12">
            <div className="section-title max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    Converse <span className="text-purple-500">Core Team</span>
                </h2>

                {/* Faculty Coordinators */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-gray-200">Faculty Coordinators</h3>
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
                        {facultyCoordinators.map((member, index) => (
                            <div key={index} className="team-card">
                                <img src={member.image} alt={member.name} className="team-img" />
                                <h4 className="team-name">{member.name}</h4>
                                <p className="team-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Student Coordinators */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-gray-200">Student Coordinators</h3>
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
                        {studentCoordinators.map((member, index) => (
                            <div key={index} className="team-card">
                                <img src={member.image} alt={member.name} className="team-img" />
                                <h4 className="team-name">{member.name}</h4>
                                <p className="team-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoreTeam;
