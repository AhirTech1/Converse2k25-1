import React from "react";

function TeamSection({ title, members, gradientClass }) {
    return (
        <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 mt-8 text-gray-200">{title}</h3>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
                {members.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className={`team-img-wrapper ${gradientClass}`}>
                            <img
                                src={member.image}
                                alt={member.name}
                                className="team-img"
                                loading="lazy"
                            />
                        </div>
                        <h4 className="team-name">{member.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamSection;