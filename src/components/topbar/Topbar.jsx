import "./Topbar.css"

const Topbar = () => {
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
               <li className="topListItem">HOME</li>
               <li className="topListItem">ABOUT</li>
               <li className="topListItem">CONTACT</li>
               <li className="topListItem">WRITE</li>
               <li className="topListItem">LOGOUT</li>

                </ul>
            </div>
            <div className="topRight">

                <img className="topImg" src="https://images.pexels.com/photos/2069243/pexels-photo-2069243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
};

export default Topbar;