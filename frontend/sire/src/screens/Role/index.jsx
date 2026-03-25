/** 
 * Author: Leon Wasiliew 
 * Last Update: 2026-03-21
 * Description: Role screen of the application.
 * Allows users to choose between Administrator and Trainee roles.
 * Based on the selected role, the user is directed to the appropriate workflow.
 */

import { useState } from "react";
import RoleLayout from "../../layouts/RoleLayout";
import Button from "../../components/Button";

/** Function that returns the Role component for handling role selection. */
export default function Role() {
    const [role, setRole] = useState("");
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);

    /** Asynchronous function to handle role selection. */
    async function handleRoleSelect(selectedRole) {
        setRole(selectedRole);
    }

    /** Asynchronous function to handle session creation (Admin). */
    async function handleSessionCreated(createdSession) {
        setSession(createdSession);
    }

    /** Asynchronous function to handle session join (Trainee). */
    async function handleSessionJoined(info) {
        // TODO: Implement trainee session handling
        setTraineeInfo(info);
    }

    // Shows role selection (initial state)
    if (!role) {
        return (
            <RoleLayout>
                <Button text="Admin" to="/create-session" />
                <Button text="Trainee" to="/join-session" />
            </RoleLayout>
        )
    }

    // Implements Administrator flow
    if (role === "admin") {
        if (!session) {
            return <div>Admin setup (to be implemented)</div>
            // return <Admin onSessionCreated={handleSessionCreated} />;
        }
    }

    // Implements Trainee flow
    if (role === "trainee") {
        if (!session) {
            return <div>Trainee join (to be implemented)</div>;
            // return <Trainee onSessionJoined={handleSessionJoined} />;
        }
    }
}