import React from "react";

const PersonList = ({
                        title,
                        people,
                        showContact = false,
                        isChip = false
                    }) => {
    return (
        <div>
            <h4 className="font-semibold text-green-300 mb-2">{title}</h4>
            {isChip ? (
                <div className="flex flex-wrap gap-2">
                    {people.map((person, index) => (
                        <span key={index} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">
              {person.name}
            </span>
                    ))}
                </div>
            ) : (
                <ul className="space-y-1 text-gray-300">
                    {people.map((person, index) => (
                        <li key={index}>
                            {person.name}
                            {showContact && person.contact && ` - ${person.contact}`}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PersonList;