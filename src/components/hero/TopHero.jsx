import { Link } from "react-router-dom";
import "./TopHero.css"
import blogpic from "../../img/blog.jpg"

const TopHero = () => {
    return (
        <div className="parent">
         <div className="content-left">
             <h1>Share & Feed</h1>
             <h2>Blog</h2>
             <i className="damn fa-solid fa-umbrella-beach"></i>
             <p className="para">There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them.We take photos as a return ticket to a moment otherwise gone. Share your experiance with us!</p>
             <button className="cta">
             <Link className="link" to="/register">
             Write
             </Link>
      </button>
         </div>
         <div className="content-right">
            <img className="hero-img" src={blogpic} alt="blogpic" />
         </div>
        </div>
    );
};

export default TopHero;