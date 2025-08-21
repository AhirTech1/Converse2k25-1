import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { EventListing } from "../constants/EventListing";
import { techEvents, nonTechEvents } from "../constants/eventNames";
import "./Common.css";

function Events() {
    const navigate = useNavigate();
    const location = useLocation();
    const [navigatingTo, setNavigatingTo] = useState(null);
    const [activeFilter, setActiveFilter] = useState("all");
    const [eventsToDisplay, setEventsToDisplay] = useState([]);

    // Initialize events based on URL parameter
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const filter = queryParams.get("filter");

        if (filter === "tech") {
            setActiveFilter("tech");
            setEventsToDisplay(
                Object.values(EventListing).filter(event => techEvents.includes(event.slug))
            );
        } else if (filter === "non-tech") {
            setActiveFilter("non-tech");
            setEventsToDisplay(
                Object.values(EventListing).filter(event => nonTechEvents.includes(event.slug))
            );
        } else {
            setActiveFilter("all");
            setEventsToDisplay(Object.values(EventListing));
        }
    }, [location]);

    const handleClick = (slug, name) => {
        setNavigatingTo(name);
        setTimeout(() => {
            navigate(`/event/${slug.toLowerCase()}`);
        }, 2000);
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        navigate(`/events?filter=${filter}`);
    };

    return (
        <div className="section-title relative flex flex-col min-h-0 items-center justify-start text-white overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-hidden relative before:relative before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10">
            <h2 className="font-semibold mt-12 px-4">Featured Events</h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-4 mb-6">
                <button
                    onClick={() => handleFilterChange("all")}
                    className={`filter-btn ${activeFilter === "all" ? "bg-purple-600" : "bg-gray-800 hover:bg-[#b9a0d3cc]"}`}
                >
                    All Events
                </button>
                <button
                    onClick={() => handleFilterChange("tech")}
                    className={`filter-btn ${activeFilter === "tech" ? "bg-purple-600" : "bg-gray-800 hover:bg-[#b9a0d3cc]"}`}
                >
                    Tech Events
                </button>
                <button
                    onClick={() => handleFilterChange("non-tech")}
                    className={`filter-btn ${activeFilter === "non-tech" ? "bg-purple-600" : "bg-gray-800 hover:bg-[#b9a0d3cc]"}`}
                >
                    Non Tech Events
                </button>
            </div>

            {/* Navigation Overlay - Final Clean Version */}
            {navigatingTo && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-gradient-to-br from-purple-900/80 to-gray-900/90 border border-purple-500/30 px-8 py-8 rounded-xl shadow-2xl text-center animate-fade-in">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <h2 className="text-xl font-medium text-purple-200">
                                Taking you to
                            </h2>
                            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                                {navigatingTo}
                            </p>

                            {/* Smooth loading bar with proper animation */}
                            <div className="w-full max-w-xs h-1.5 bg-gray-700 rounded-full overflow-hidden mt-4">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                    style={{
                                        animation: 'loadingBar 1.5s linear forwards',
                                        width: '0%'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full px-4 sm:px-6 lg:px-8 mt-4 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {eventsToDisplay.map((event) => (
                    <div
                        key={event.slug}
                        onClick={() => handleClick(event.slug, event.name)}
                        className="event-card"
                    >
                        <div className="event-image">
                            <img decoding="async" loading="lazy"
                                 src={event.image}
                                 alt={event.name}
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="event-text-primary text-3xl font-semibold">
                                {event.name}
                            </h3>
                            <p className="event-text-secondary italic text-xl text-gray-300 mt-2">
                                {event.slogan}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;