import React from "react";
import { useNavigate } from "react-router-dom";
import { teamsList } from "../constants/teamsList.js";
import "./Common.css"; // assuming your event card styles are there

function Teams() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-hidden relative before:relative before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10 px-4 sm:px-6 md:px-12 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-4xl font-bold mb-12">
                    Meet the <span className="text-purple-500">Teams</span>
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {teamsList.map((team) => (
                        <div
                            key={team.id}
                            className="relative bg-zinc-900 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-purple-500/40 transition-all duration-300"
                            onClick={() => navigate(`/teams/${team.id}`)}
                        >
                            <h3 className="text-xl font-semibold mb-3">{team.name}</h3>
                            <p className="text-gray-400 text-sm">{team.description}</p>
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-500/10 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Teams;
