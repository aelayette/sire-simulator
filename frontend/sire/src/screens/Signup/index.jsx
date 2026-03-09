import FormLayout from "../../layouts/FormLayout";
import Button from "../../components/Button";

export default function Signup() {
    return (
        <FormLayout>
            <form className="signup-form">
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password*</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password..."/>
                </div>

                <Button text="Create Account" type="submit"/>
            </form>
        </FormLayout>
    )
}