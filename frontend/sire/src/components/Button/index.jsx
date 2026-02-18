import { useNavigate } from "react-router-dom";
import "./Button.cs";

export default function Button({ text, to, onClick, type = "button", ...rest }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) navigate(to);
        if (onClick) onClick();
    };

    return (
        <button
        type={type}
        className="app-button"
        onClick={handleClick}
        {...rest}
        >
            {text}
        </button>
    );
}