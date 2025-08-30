import React from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index.js';

// Replaced createStore with configureStore for a more modern Redux Toolkit approach
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // Disable serializable state check for development
        serializableCheck: false,
    }),
});

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                <App />
                <ToastContainer />
            </GoogleOAuthProvider>
        </Provider>
    </BrowserRouter>
);