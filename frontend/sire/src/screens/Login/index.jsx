import { useState } from "react";
// import { login } from "../../services/api/auth";
import FormLayout from "../../layouts/FormLayout";
import Button from "../../components/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await Login(email, password);
            // TODO: navigate to protected route or trigger app auth state
        } catch (error) {
            setError(error.message || "Login failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormLayout>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        required
                        placeholder="Enter your email..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                        required
                        placeholder="Enter your password..."/>
                </div>
                <div>
                    <p className="no-account-text">
                        Don't have an account? <a href="/signup">Sign up here</a>.
                    </p>
                </div>
                {error && <div className="error">{error}</div>}
                <Button text={loading ? "Logging in..." : "Login"} type="submit"/>
            </form>
        </FormLayout>
    )
}