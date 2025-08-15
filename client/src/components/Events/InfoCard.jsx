// Updated InfoCard.jsx with tighter spacing
import React from "react";

const InfoCard = ({
                      title,
                      color = "blue",
                      children,
                      columns = 1
                  }) => {
    const colorClasses = {
        blue: "from-blue-400 to-blue-600",
        purple: "from-purple-400 to-purple-600",
        green: "from-green-400 to-green-600",
        orange: "from-orange-400 to-orange-600"
    };

    const dotColors = {
        blue: "bg-blue-500",
        purple: "bg-purple-500",
        green: "bg-green-500",
        orange: "bg-orange-500"
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className={`w-3 h-3 ${dotColors[color]} rounded-full mr-2`}></span>
                {title}
            </h3>
            <div className={`grid ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-3`}>
                {children}
            </div>
        </div>
    );
};

export default InfoCard;