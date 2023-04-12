import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavigationProvider } from "./context/navigation";
import { AuthProvider } from "./components/auth/auth";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
    <NavigationProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </NavigationProvider>
);
