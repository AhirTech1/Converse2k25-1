import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInTeam, fetchEmails } from "../../auth/Register.js";
import EmailDropdown from "./EmailDropdown.jsx";

function RegisterButtonForTeam({ event, min, max }) {
    const [loading, setLoading] = useState(false);
    const [emailOptions, setEmailOptions] = useState([]);
    const [selectedEmailsList, setSelectedEmailsList] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth?.authData?.user);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("profile");
            if (token && user?.events?.[event] === false) {
                const { data } = await dispatch(fetchEmails({ event }));
                setEmailOptions(data?.unregisteredEmails || []);
            }
        };

        fetchData();
    }, [dispatch, event, user]);

    const handleSignin = () => {
        navigate("/signin");
    };

    const handleAddEmail = (email) => {
        if (!email) {
            toast.warn("Please select an email before adding.", {
                position: "top-right",
                autoClose: 4000,
                theme: "dark",
            });
            return;
        }

        if (selectedEmailsList.includes(email)) {
            toast.info("This email is already added.", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
            });
            return;
        }

        setSelectedEmailsList((prev) => [...prev, email]);
    };

    const handleRemoveEmail = (emailToRemove) => {
        setSelectedEmailsList((prev) =>
            prev.filter((email) => email !== emailToRemove)
        );
    };

    const handleRegister = async () => {
        if (selectedEmailsList.length < min - 1) {
            toast.warn(`Please add at least ${min - 1} team members before registering.`, {
                position: "top-right",
                autoClose: 4000,
                theme: "dark",
            });
            return;
        }

        setLoading(true);
        try {
            const res = await dispatch(
                RegisterInTeam({ event, email: selectedEmailsList })
            );

            if (res?.success) {
                toast.success("🎉 Team registered successfully !!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                });

                setTimeout(() => navigate(`/event/${event}`), 500);
            } else {
                toast.error(res?.message || "Registration Failed", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                });
            }
        } catch (err) {
            console.error("Error registering team", err);
            toast.error("Something went wrong.", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
        }
        setLoading(false);
    };

    if (user?.events?.[event]) {
        const teamKey = `${event}Team`;
        const team = user?.events?.[teamKey] || [];

        return (
            <div className="bg-indigo-900/20 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30 shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-4">
                    Already Registered
                </p>
                <div className="space-y-3">
                    <p className="text-lg text-blue-200">Your Team:</p>
                    <ul className="space-y-2">
                        {team.map((member, i) => (
                            <li key={i} className="flex items-center bg-gray-800/50 p-3 rounded-lg">
                <span className="flex-1 truncate">
                  {member.fullName} <span className="text-gray-400">({member.email})</span>
                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="space-y-4">
                <div className="bg-amber-900/20 backdrop-blur-sm p-4 rounded-lg border border-amber-500/30">
                    <p className="text-amber-200">Please sign in to register for this event</p>
                </div>
                <button
                    onClick={handleSignin}
                    className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
                >
                    Sign In
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-5">
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 shadow-lg">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Team Registration</h3>
                <p className="text-sm text-gray-400 mb-4">Add {min} to {max} team members</p>

                <EmailDropdown
                    emailOptions={emailOptions}
                    handleAddEmail={handleAddEmail}
                    selectedEmailsList={selectedEmailsList}
                    min={min}
                    max={max}
                />
            </div>

            {selectedEmailsList.length > 0 && (
                <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 shadow-lg">
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">Selected Team Members</h3>
                    <ul className="space-y-2 max-h-60 overflow-y-auto">
                        {selectedEmailsList.map((email, idx) => (
                            <li
                                key={idx}
                                className="flex items-center justify-between bg-gray-700/30 p-3 rounded-lg"
                            >
                                <span className="truncate text-gray-300">{email}</span>
                                <button
                                    onClick={() => handleRemoveEmail(email)}
                                    className="text-red-400 hover:text-red-300 transition-colors"
                                    aria-label={`Remove ${email}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button
                onClick={handleRegister}
                disabled={
                    loading ||
                    selectedEmailsList.length < min - 1 ||
                    selectedEmailsList.length > max - 1
                }
                className={`w-full px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    selectedEmailsList.length >= min - 1
                        ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white focus:ring-blue-400"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >
                {loading ? (
                    <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Registering Team...
          </span>
                ) : (
                    `Register Team (${selectedEmailsList.length}/${max})`
                )}
            </button>
        </div>
    );
}

export default RegisterButtonForTeam;