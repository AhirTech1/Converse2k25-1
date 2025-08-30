import * as api from "../api/index.js";
import { AUTH } from "../constants/actionTypes.js";

export const fetchUser = () => async (dispatch) => {
    try {
        const token = JSON.parse(localStorage.getItem("profile"));
        if (token) {
            const { data } = await api.getProfile();
            dispatch({ type: AUTH, data });
        }
    } catch (error) {
        console.error("Fetch user failed", error);
        // You could also dispatch a logout action if the token is invalid or expired
        // dispatch({ type: LOGOUT });
        // localStorage.clear();
    }
};

export const googleSignIn = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userData);
        dispatch({ type: AUTH, data });
        return { success: true };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong! Please try again.",
        };
    }
};

export const updateProfile = (userData) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(userData);
        dispatch({ type: AUTH, data });
        return { success: true };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong! Please try again!",
        };
    }
};