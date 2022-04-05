import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Log in</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter Your email" />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/Register">Register</Link>     
            </button>
        </div>
    );
};

export default Login;