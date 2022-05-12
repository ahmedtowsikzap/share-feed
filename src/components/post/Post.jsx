import { Link } from "react-router-dom";
import "./Post.css"

const Post = ({post}) => {

    const PF = "https://share-feed-12.herokuapp.com/images/";
    return (
        <div className="post">
            {post.photo && (
            <img
            className="postImg"
            src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">{

                    post.categories.map((c)=>(
                    <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
                </Link> 
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
               
            </div>
        </div>
    );
};

export default Post;