import React from 'react';
import "./HomePage.css";
// Removed EventListing import since we're not using it anymore

const sponsors = [
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
];

function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-x-hidden min-h-screen relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10">
      {/* Main Logo Section */}
      <img
        src="/converse2k25Logo.png"
        alt="Converse 2k25 Logo"
        className="relative z-40 w-1/2 h-auto sm:w-1/4 md:w-1/5 lg:w-1/4 mt-4 animate-slideUp"
      />
      <div className="title flex flex-col items-center justify-center text-center">
        <h1 className="font-['Orbitron'] text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] leading-tight mb-6 bg-clip-text">
          CONVERSE<br />2K25
        </h1>
      </div>

      {/* ===== Events Section (Replaced Featured Events) ===== */}
      <section id="events" className="section">
        <div className="section-title">
          <h2>Our Events</h2>
        </div>

        <div className="events-grid">
          <a href="events/events.html?type=tech-event" className="event-card-link">
            <div className="event-card">
              <div className="event-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Tech Event Image" />
              </div>
              <div className="event-content">
                <h3>Tech Events</h3>
                <h4>Where Innovation Meets Execution</h4>
                <span className="event-list tech-event">Logo Hunt</span>
                <span className="event-list tech-event">Cyber Siege</span>
                <span className="event-list tech-event">IT Quiz</span>
                <span className="event-list tech-event">Bug Buzz</span>
                <span className="event-list tech-event">Codathon</span>
                <span className="event-list tech-event">Tech Debate</span>
                <span className="event-list tech-event">Web Wave</span>
                <span className="event-list tech-event">AI Memes</span>
                <span className="event-list tech-event">PY-IT</span>
                <span className="event-list tech-event">AI Quiz</span>
              </div>
            </div>
          </a>

          <a href="events/events.html?type=non-tech-event" className="event-card-link">
            <div className="event-card">
              <div className="event-image">
                <img src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Non-Tech Event Image" />
              </div>
              <div className="event-content">
                <h3>Non-Tech Events</h3>
                <h4>Fun Beyond the Code</h4>
                <span className="event-list non-tech-event">BGMI</span>
                <span className="event-list non-tech-event">Valorant Blitz</span>
                <span className="event-list non-tech-event">IPL Auction</span>
                <span className="event-list non-tech-event">Level Zero</span>
                <span className="event-list non-tech-event">Musical Mystery</span>
                <span className="event-list non-tech-event">Mind Over Matter</span>
                <span className="event-list non-tech-event">Chess Clash</span>
                <span className="event-list non-tech-event">Blind Navigator</span>
                <span className="event-list non-tech-event">Treasure Hunt</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ===== Sponsors Section ===== */}
      <section className="py-12 px-4 sm:px-6">
        <div className="section-title mb-8">
          <h2 className="text-4xl md:text-5xl text-center">Our Sponsors</h2>
        </div>

        {/* Responsive sponsor logos */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {sponsors.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="w-full h-auto object-contain transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;