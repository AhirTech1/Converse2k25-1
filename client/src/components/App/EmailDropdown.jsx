import React, { useRef, useState, useEffect } from "react";

function EmailDropdown({ emailOptions, handleAddEmail, selectedEmailsList, max }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedEmails, setSelectedEmails] = useState(selectedEmailsList || []);
    const dropdownRef = useRef();
    const inputRef = useRef();

    const isMaxReached = selectedEmails.length >= max;

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
        if (isMaxReached) setIsDropdownOpen(false);
    }, [isMaxReached]);

    const filteredOptions = emailOptions
        .filter(email =>
            !selectedEmails.includes(email) &&
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
            setSearchQuery("");
        }
    };

    const handleSelectEmail = (email) => {
        const updatedEmails = [...selectedEmails, email];
        setSelectedEmails(updatedEmails);
        handleAddEmail(updatedEmails); // Pass the updated list to parent
        setSearchQuery("");
        setIsDropdownOpen(false);
        inputRef.current?.focus();
    };

    const handleRemoveEmail = (emailToRemove) => {
        const updatedEmails = selectedEmails.filter(email => email !== emailToRemove);
        setSelectedEmails(updatedEmails);
        handleAddEmail(updatedEmails); // Pass the updated list to parent
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Email Dropdown */}
            <div className="relative w-full md:w-1/2" ref={dropdownRef}>
                {/* Search Input */}
                <div className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder={isMaxReached ? `Maximum ${max} emails reached` : "Search emails..."}
                        value={searchQuery}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        disabled={isMaxReached}
                        className={`
                            w-full px-4 py-3 rounded-xl border shadow-sm
                            focus:outline-none focus:ring-2
                            transition-all duration-200
                            ${isMaxReached
                            ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-200"
                        }
                        `}
                    />
                    {isMaxReached && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Dropdown List */}
                {isDropdownOpen && !isMaxReached && (
                    <div className="
                        absolute z-[9999] mt-2 w-full rounded-xl backdrop-blur-md bg-white/95
                        shadow-lg border border-gray-100 py-2 max-h-40 overflow-auto
                        transition-all duration-200
                    ">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((email, idx) => (
                                <button
                                    key={`${email}-${idx}`}
                                    type="button"
                                    className="
                                        w-full text-left px-4 py-2 text-sm flex items-center gap-2
                                        text-gray-700 hover:bg-blue-50 hover:scale-[1.01]
                                        transition-all duration-150 ease-out
                                        first:rounded-t-xl last:rounded-b-xl
                                    "
                                    onClick={() => handleSelectEmail(email)}
                                >
                                    <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                    {email}
                                </button>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-sm text-gray-500 flex items-center italic">
                                <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {searchQuery ? "No matches found" : "No available emails"}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Selected Members Box - Always visible */}
            <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-full min-h-[60px]">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Selected Members ({selectedEmails.length}/{max})</h3>
                    {selectedEmails.length > 0 ? (
                        <ul className="space-y-1">
                            {selectedEmails.map((email, index) => (
                                <li key={index} className="flex items-center justify-between group">
                                    <div className="flex items-center text-sm text-gray-700">
                                        <svg className="h-4 w-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        {email}
                                    </div>
                                    <button
                                        onClick={() => handleRemoveEmail(email)}
                                        className="opacity-70 hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                                        title="Remove member"
                                    >
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-sm text-gray-400 italic flex items-center">
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            No members selected
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EmailDropdown;