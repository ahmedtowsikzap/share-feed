import "./Post.css"

const Post = () => {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.unsplash.com/photo-1501425359013-96058e410cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit .</span>
                <hr />
                <span className="postDate">3 hours ago</span>
                <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam expedita repellat earum at aperiam repellendus eos, molestias quasi beatae soluta explicabo esse odio temporibus vero. Vel voluptates tempore temporibus voluptate?
                pellendus eos, molestias quasi beatae soluta explicabo esse odio temporibus vero. Vel voluptates tempore temporibus 
                pellendus eos, molestias quasi beatae soluta explicabo esse odio temporibus vero. Vel voluptates tempore temporibus 
                pellendus eos, molestias quasi beatae soluta explicabo esse odio temporibus vero. Vel voluptates tempore temporibus
                pellendus eos, molestias quasi beatae soluta explicabo esse odio temporibus vero. Vel voluptates tempore temporibus 
                pellendus eos, molestias quasi beatae soluta explicabo esse odio temporibus vero. Vel voluptates tempore temporibus 
                pellendus eos, molestias quasi beatae soluta explicabo esse odio temporibus vero. Vel voluptates tempore temporibus  </p>
            </div>
        </div>
    );
};

export default Post;