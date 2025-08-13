import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Common.css";

const sponsors = [
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
  "/sponsor.png",
];

function HomePage() {
  const [logoGlow, setLogoGlow] = useState(false);
  const navigate = useNavigate();
  
  const triggerLogoAnimation = () => {
    setLogoGlow(true);
    setTimeout(() => setLogoGlow(false), 1000);
  };

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden text-gray-50 overflow-x-hidden min-h-screen relative">
      {/* Enhanced Dynamic Animated Background with Subtle Stars and Gradient */}
      <div className="absolute inset-0 -z-5 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 -z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      
      {/* Centered Logo and Title */}
      <div className="relative z-40 w-2/3 sm:w-1/4 md:w-1/5 lg:w-1/4 mt-8">
        <div className={`relative ${logoGlow ? 'animate-logo-glow' : ''}`}>
          <img
            src="converse2k25Logo.png"
            alt="Converse 2k25 Logo"
            className="relative w-full animate-slideUp hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={triggerLogoAnimation}
          />

          <div className="title flex flex-col items-center justify-center text-center mt-4 md:mt-0">
            <h1 className="font-['Orbitron'] text-4xl gradient-main-title font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] leading-tight mb-2 bg-clip-text">
              CONVERSE<br />2K25
            </h1>
          </div>

          {/* Subtle Sparkle Particles on Click */}
          {logoGlow && (
            <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-sparkle"
                  style={{
                    background: `hsl(${Math.random() * 360}, 100%, 70%)`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="items-center justify-center text-center">
          <p className="font-bold slogan">From Hello World to Prompt World</p>
        </div>
      </div>

      {/* ===== Events Section ===== */}
      <section id="events" className="section">
        <div className="section-title font-semibold">
          <h2>Our Events</h2>
        </div>

        <div className="events-grid">
          <a href="/events?filter=tech" className="event-card-link">
            <div className="event-card">
              <div className="event-image">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Tech Event Image" />
              </div>
              <div className="event-content">
                <h3>Tech Events</h3>
                <h4 className="italic">Where Innovation Meets Execution</h4>
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

          <a href="/events?filter=non-tech" className="event-card-link">
            <div className="event-card">
              <div className="event-image">
                <img src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Non-Tech Event Image" />
              </div>
              <div className="event-content">
                <h3>Non-Tech Events</h3>
                <h4 className="italic">Fun Beyond the Code</h4>
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
      <section className="py-12 px-4 sm:px-6 mt-8">
        <div className="section-title mb-4 font-semibold">
          <h2 className="text-4xl md:text-5xl text-center">Our Sponsors</h2>
        </div>

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

        {/* About Section */}
        <section className="min-h-0 w-auto mt-24 px-3 sm:px-6 md:px-8">
            <div className="section-title mb-4 font-semibold max-w-5xl mx-auto text-center">
                <h2 className="font-bold leading-tight">About<br /><span className="text-purple-500">Converse 2K25</span></h2>
                <p className="text-gray-300 sm:text-4xl md:text-2xl mt-4 mb-6">
                    Converse 2K25 is the annual techfest by IT & AI-DS departments of SCET,
                    blending technology and creativity into a two-day spectacle of innovation.
                    Join us on 20–21 Sept 2025 to experience workshops, competitions, and more.
                </p>
                <button
                    onClick={() => navigate('/about')}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all duration-300"
                >
                    Know More
                </button>
            </div>
        </section>

    </div>
  );
}

export default HomePage;