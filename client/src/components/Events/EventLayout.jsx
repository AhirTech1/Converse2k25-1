import React from "react";

const EventLayout = ({
                         eventName,
                         tagline,
                         posterImage,
                         children,
                         registerButton,
                         eventDetails
                     }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Registration Section */}
            <section className="py-8 px-4 bg-indigo-900/30 backdrop-blur-sm border-b border-indigo-500/30">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        {eventName}
                    </h1>
                    <p className="text-lg text-blue-200 mb-6">{tagline}</p>
                    {registerButton}
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto py-6 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Poster Section */}
                    <div className="flex justify-center items-start">
                        <div className="relative group">
                            <img decoding="async" loading="lazy"
                                 src={posterImage}
                                 alt={`${eventName} Poster`}
                                 className="rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border-2 border-indigo-500/30"
                            />
                            <div className="absolute inset-0 bg-indigo-600/10 rounded-xl group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Event details section */}
                    <div className="space-y-5">
                        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 shadow-lg">
                            <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Event Details
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {eventDetails.map((detail, index) => (
                                    <div key={index}>
                                        <p className="text-sm text-blue-300">{detail.label}</p>
                                        <p className="font-medium">{detail.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(EventLayout);