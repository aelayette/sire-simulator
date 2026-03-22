/** 
 * Author: Leon Wasiliew 
 * Last Update: 2026-03-21
 * Description: Defines all application routes using React Router.
 * Maps URL paths to their corresponding screen components.
 */

import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home"
import Signup from "../screens/Signup"
import Login from "../screens/Login"
import Role from "../screens/Role"

/** Function that returns the AppRouter component for handling client-side routing. */
export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/role" element={<Role />} />
        </Routes>
    );
}