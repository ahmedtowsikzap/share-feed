import { Link } from "react-router-dom";
import "./Topbar.css"

const Topbar = () => {
    const user = false
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
                   <Link to="/" className="link">HOME</Link>
               </li>
               <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
               <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
               <li className="topListItem"><Link to="/Write" className="link">WRITE</Link></li>
               <li className="topListItem">
                   {user && "LOGOUT"}
               </li>

                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://images.pexels.com/photos/2069243/pexels-photo-2069243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link to="/Login" className="link">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link to="/Register" className="link">REGISTER</Link>
                            </li>
                           >
                           
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
};

export default Topbar;