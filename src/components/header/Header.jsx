import "./Header.css"

const Header = () => {
    return (
        <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
            Share & Feed
        <i className="now1 fa-solid fa-comments"></i>
        </span>
        <span className="headerTitleLg">Story</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1248418/pexels-photo-1248418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
    );
};

export default Header;