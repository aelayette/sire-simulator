import { Routes, Route } from "react-router-dom";

// TODO: Implement these files
import Home from "../screens/Home"
// import Signup from "../screens/Signup"
// import Login from "../screens/Login"

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Home />} />
            <Route path="/login" element={<Home />} />
        </Routes>
    );
}