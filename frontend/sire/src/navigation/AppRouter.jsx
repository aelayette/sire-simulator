import { Routes, Route } from "react-router-dom";

// TODO: Implement these files
import Home from "../screens/Home"
import Signup from "../screens/Signup"
import Login from "../screens/Login"
import Login from "../screens/Role"

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