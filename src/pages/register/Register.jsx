import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./Register.css"

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false)
    try{
        
        const res = await axiosInstance.post("/auth/register", {
            username,email,password
         });
         res.data && window.location.replace("/login");
    } catch(err){

    setError(true);
    }
    };
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your Username"
                 onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter Your email" 
                 onChange={e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" 
                 onChange={e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/Login">Login</Link>
            </button>

            {error && <span style={{color:"red", marginTop:"12px"}}>Something Went Wrong! You can Register Only ones!</span>}
        </div>
    );
};

export default Register;