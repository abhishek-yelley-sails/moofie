import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/signup">Do no have an account? Sign Up!</Link>
        </div>
    );
}