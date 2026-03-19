import { useState } from "react";
// import Admin from "../Admin";
// import Trainee from "../Trainee";
import RoleLayout from "../../layouts/RoleLayout";

export default function Role() {
    const [role, setRole] = useState("");
    const [session, setSession] = useState(null);
    const [error, setError] = useState("");

    async function handleRoleSelect(selectedRole) {
        setRole(selectedRole);
    }

    async function handleSessionCreated(createdSession) {
        setSession(createdSession);
    }

    async function handleSessionJoined(info) {
        setTraineeInfo(info);
    }

    if (role == "") {
        return (
            <RoleLayout>
                <Button text="Admin" to="/admin" />
                <Button text="Trainee" to="/trainee" />
            </RoleLayout>
        )
    }

    if (role === "admin") {
        if (!session) {
            return <Admin session={session}/>;
        }
    }

    if (role === "trainee") {
        if (!session) {
            return <Trainee session={session}/>;
        }
    }

}