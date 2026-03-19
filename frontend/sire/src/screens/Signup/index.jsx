import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signup } from "../../services/api/auth";
import FormLayout from "../../layouts/FormLayout";
import Button from "../../components/Button";

export default function Signup() {
    /** Constants for form state management. */
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [ok, setOk] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    /** Asynchronous function to handle signup logic. */
    async function handleSignup(e) {
        e.preventDefault();  // Prevents form submission and page reload
        setError("");        // Clears previous error messages
        setOk("");           // Clears previous success messages

        // Checks for empty fields
        if (!username || !email || !password || !confirmPassword) {
            setError("ERROR: All fields are required!");
            return;
        }

        // Checks for password length
        if (password.length < 8) {
            setError("ERROR: Password must be at least 8 characters long!");
            return;
        }

        // Checks for password match
        if (password !== confirmPassword) {
            setError("ERROR: Passwords do not match!");
            return;
        }

        // Checks for valid email format
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("ERROR: Invalid email format!");
            return;
        }

        setLoading(true); // Starts loading state

        try {
            await signup({ username, email, password });  // Calls the signup API with user data
            setOk("Account created. Please log in.");     // Sets success message
            navigate("/login");                           // Redirects to login page after successful signup
        }
        catch (error) {
            setError(error.message || "Signup failed");  // Sets error message if signup fails
        }
        finally {
            setLoading(false);  // Ends loading state regardless of success or failure
        }
    }

    return (
        <FormLayout>
            <form className="signup-form" onSubmit={handleSignup}>
                {/* Form group for username input that updates the username state on change. */}
                <div className="form-group">
                    <label htmlFor="username">Username*</label>
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Enter your username..."/>
                </div>
                {/* Form group for email input that updates the email state on change. */}
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email..."/>
                </div>
                {/* Form group for password input that updates the password state on change. */}
                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password..."/>
                </div>
                {/* Form group for confirm password input that updates the confirm password state on change. */}
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password*</label>
                    <input 
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm your password..."/>
                </div>
                {/* Links to login page for users who already have an account. */}
                <div className="form-group">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
                {error && <div className="error">{error}</div>}
                {ok && <div className="success">{ok}</div>}
                {/* Submit button for the signup form.*/}
                <Button text={loading ? "Creating account..." : "Signup"} type="submit"/>
            </form>
        </FormLayout>
    )
}