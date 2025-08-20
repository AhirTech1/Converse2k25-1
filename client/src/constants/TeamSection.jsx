import React from "react";

function TeamSection({ title, members, gradientClass }) {
    return (
        <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 mt-8 text-gray-200">{title}</h3>
            <div className="flex flex-wrap justify-center gap-8">
                {members.map((member, index) => (
                    <div key={index} className="team-card w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.333%-2.666rem)] max-w-xs">
                        <div className={`team-img-wrapper ${gradientClass}`}>
                            <img decoding="async"
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

export default React.memo(TeamSection);