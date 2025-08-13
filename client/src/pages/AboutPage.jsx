import React from 'react'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 text-gray-50 overflow-hidden relative before:relative before:inset-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_10%_20%,rgba(91,33,182,0.1)_0%,transparent_20%)] before:bg-[radial-gradient(circle_at_90%_80%,rgba(124,58,237,0.1)_0%,transparent_20%)] before:-z-10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
                Step into Tomorrow at <span className="font-['Orbitron'] text-purple-500">Converse 2K25</span>
            </h1>

            <p className="text-lg text-gray-300 text-center mb-12">
                A Fusion of Innovation and Inspiration 🚀
            </p>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-3">Event Overview</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Get ready for an exciting journey into the world of technology and creativity!
                        The Information Technology & Artificial Intelligence and Data Science departments
                        of Sarvajanik College of Engineering and Technology are thrilled to present Converse 2K25.
                        Mark your calendars for the <span className="text-purple-400 font-medium">20th and 21st of September, 2025</span>,
                        as this event unfolds under the vibrant banner of Kshitij.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3">A Fusion of Tech and Artistry</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Converse 2K25 is far from your average technical festival; it's an inspiring blend of the latest in
                        technology and limitless creativity. Featuring an impressive lineup of
                        <span className="text-purple-400 font-medium"> 10 technical and 8 non-technical events</span>, this festival
                        is a vibrant stage for the sharpest minds and the most inventive spirits.
                        Immerse yourself in the realm of IT, or let your creativity shine in diverse
                        non-technical areas like art, sports, and entrepreneurship.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-3">Why Converse 2K25?</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Converse 2K25 isn't just a festival; it's a chance to connect with fellow enthusiasts,
                        gain insights from industry leaders, and navigate your path into the future of
                        technology and innovation. Join us for an unforgettable experience that will
                        leave you inspired, informed, and energized. The future is here, and it's unfolding
                        at Converse 2K25!
                    </p>
                </section>
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={() => window.scrollTo(0, 0)}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all duration-300"
                >
                    Back to Top
                </button>
            </div>
        </div>
    </div>
  );
}

export default AboutPage
