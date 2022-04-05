import { Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your Username" />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter Your email" />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/Login">Login</Link>
            </button>
        </div>
    );
};

export default Register;