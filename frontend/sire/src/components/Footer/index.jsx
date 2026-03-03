import "./Footer.css";

export default function Footer() {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Team Nibble - All rights reserved</p>
        </footer>
    );
}