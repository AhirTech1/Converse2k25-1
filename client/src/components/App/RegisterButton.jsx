import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInSingle } from "../../auth/Register.js";

function RegisterButton({ event }) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth?.authData?.user);

    const handleSignin = () => {
        navigate("/signin");
    };

    const handleRegister = async () => {
        setLoading(true);
        try {
            const res = await dispatch(RegisterInSingle({ event }));

            if (res?.success) {
                toast.success("🎉 Your Profile updated successfully !!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                });

                setTimeout(() => navigate(`/event/${event}`), 500);
            } else {
                toast.error(res?.message || "Profile Update Failed", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                });
            }
        } catch (err) {
            console.error("Error updating profile", err);
            toast.error("Something went wrong.", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
        }
        setLoading(false);
    };

    return user?.events?.[event] === true ? (
        <div className="bg-indigo-900/20 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30 shadow-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Already Registered
            </p>
        </div>
    ) : user ? (
        <button
            onClick={handleRegister}
            disabled={loading}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:transform-none disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
            {loading ? (
                <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Registering...
        </span>
            ) : (
                "Register Now"
            )}
        </button>
    ) : (
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

export default RegisterButton;