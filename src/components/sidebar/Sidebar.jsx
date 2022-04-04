import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">

                <span className="sidebarTitle">ABOUT ME!</span>
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="guy with laugh" />
                <p>Developing and exploring the world to get some freshner air to breath including coffe or milk shake who knows hmmm....</p>
                <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">

                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Film</li>
                </ul>
                </div>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">

            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>

            </div>
        </div>
    );
};

export default Sidebar;