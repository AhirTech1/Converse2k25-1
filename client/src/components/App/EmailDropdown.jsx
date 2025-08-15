import React, { useRef, useState, useEffect } from "react";

function EmailDropdown({ emailOptions, handleAddEmail, selectedEmailsList, max }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef();
    const inputRef = useRef();

    const isMaxReached = selectedEmailsList.length >= max;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isMaxReached) {
            setIsDropdownOpen(false);
        }
    }, [isMaxReached]);

    const filteredOptions = emailOptions
        .filter(email =>
            !selectedEmailsList.includes(email) &&
            email.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => a.localeCompare(b));

    const handleInputChange = (e) => {
        if (!isMaxReached) {
            setSearchQuery(e.target.value);
            setIsDropdownOpen(true);
        }
    };

    const handleInputFocus = () => {
        if (!isMaxReached) {
            setIsDropdownOpen(true);
            setSearchQuery(""); // Clear search query when focusing to show all available options
        }
    };

    const handleSelectEmail = (email) => {
        handleAddEmail(email);
        setSearchQuery("");
        setIsDropdownOpen(false);
        inputRef.current?.focus(); // Return focus to input after selection
    };

    return (
        <div className="relative w-full max-w-md" ref={dropdownRef}>
            {/* Search Input */}
            <input
                ref={inputRef}
                type="text"
                placeholder={isMaxReached ? `Max ${max} emails selected` : "Search or select email..."}
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                disabled={isMaxReached}
                className={`w-full border border-gray-300 rounded px-3 py-2 text-white focus:outline-none focus:ring focus:border-blue-300 ${
                    isMaxReached ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
            />

            {/* Dropdown List */}
            {isDropdownOpen && !isMaxReached && (
                <div className="absolute left-0 right-0 mt-1 z-50 bg-white border border-gray-300 rounded w-full max-h-60 overflow-y-auto shadow-lg">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((email, idx) => (
                            <div
                                key={`${email}-${idx}`}
                                className="px-3 py-2 cursor-pointer hover:bg-blue-100 text-sm text-black"
                                onClick={() => handleSelectEmail(email)}
                            >
                                {email}
                            </div>
                        ))
                    ) : (
                        <div className="px-3 py-2 text-gray-500 text-sm">
                            {searchQuery ? "No matching emails found" : "No available emails to select"}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default EmailDropdown;