import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventListing } from "../constants/EventListing";
import "./Common.css";

function Events() {
  const navigate = useNavigate();
  const [navigatingTo, setNavigatingTo] = useState(null);

  const handleClick = (slug, name) => {
    setNavigatingTo(name);
    setTimeout(() => {
      navigate(`/event/${slug.toLowerCase()}`);
    }, 2000);
  };

  return (
    <div className="section-title relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-x-hidden min-h-screen relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10">
      <h2 className="font-semibold mt-12">All Events</h2>

      {/* Navigation Overlay */}
      {navigatingTo && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="px-8 py-6 rounded-lg shadow-lg animate-pulse text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Navigating to...
            </h2>
            <p className="text-lg font-bold text-blue-600">{navigatingTo}</p>
          </div>
        </div>
      )}

      <div className="w-full px-4 sm:px-6 lg:px-8 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.values(EventListing).map((event) => (
          <div
            key={event.slug}
            onClick={() => handleClick(event.slug, event.name)}
            className="event-card"
          >
            <div className="event-image">
              <img
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
