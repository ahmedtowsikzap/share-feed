import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
            <span className="headerTitlesm"> <span className="big">S</span>hare Feed</span>
            <span className="headerTitleLg">stories</span>

            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80" alt="" />
        </div>
    );
};

export default Header;