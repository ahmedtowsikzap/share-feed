import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css"

const Topbar = () => {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"
    const handleLogout =(e)=>{
     dispatch({type: "LOGOUT"});

    }
    return (
        <div className='top'>
            <div className="topLeft"> 
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">

                <ul className="topList">
               <li className="topListItem">
                   <Link to="/" className="link li">HOME</Link>
               </li>
               <li className="topListItem"><Link to="/" className="link li">ABOUT</Link></li>
               <li className="topListItem"><Link to="/" className="link li">CONTACT</Link></li>
               <li className="topListItem"><Link to="/Write" className="link li">WRITE</Link></li>
               <li className="topListItem li2" onClick={handleLogout}>
                   {user && "LOGOUT"}
               </li>

                </ul>
            </div>
            <div className="topRight">
                
                {
                    user ? (
                        <Link to={"/settings"}>
                         <img className="topImg" src={PF+user.profilePic} alt="" />
                        </Link>
                       

                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link to="/Login" className="link li">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link to="/Register" className="link li">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
};

export default Topbar;