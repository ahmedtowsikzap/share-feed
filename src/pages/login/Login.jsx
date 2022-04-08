import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const userRef = useRef()
    const passwordRef = useRef()
    const handleSubmit =(e) =>{

        e.preventDefault()
    }
    return (
        <div className="login">
            <span className="loginTitle">Log in</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter Your username..." 
                ref={useRef}
                />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password" 
                 ref={passwordRef}
                />
                <button className="loginButton" type="submit">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/Register">Register</Link>     
            </button>
        </div>
    );
};

export default Login;