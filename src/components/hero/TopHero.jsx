import { Link } from "react-router-dom";
import "./TopHero.css"
import blogpic from "../../img/blog.jpg"

const TopHero = () => {
    return (
        <div className="parent">
         <div className="content-left">
             <h1>Share & Feed</h1>
             <h2>Blog</h2>
             <i className="now1 fa-solid fa-comments"></i>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi blanditiis porro minima eum accusantium. Suscipit deleniti officiis atque quos. Consequatur. </p>
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