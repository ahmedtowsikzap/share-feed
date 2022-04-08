import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../../context/Context";
import "./SinglePost.css"

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    const handleDelete = async(e)=>{
        try{

            await axios.delete(`/posts/${post._id}`, {data :{username:user.username}});
            window.location.replace("/");
        }catch(err){

        }

            
    }

    useEffect(()=>{
          const getPost = async()=>{

            const res = await axios.get("/posts/"+path);
            setPost(res.data)
          }
          getPost();
     
    },[path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
             <img src={PF + post.photo} alt="" className="singlePostImg" />

                )}
                    {updateMode  ? (<input type="text" value={post.title} className="singlePostTitleInput" />) : (
                        <h1 className="singlePostTitle">{post.title}
             {post.username === user?.username &&(
             <div className="singlePostEdit">
             <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
             <i className="singlePostIcon fa-solid fa-trash-arrow-up" onClick={handleDelete}></i>
             </div>
              )}
             </h1>
                ) }
              <div className="singlePostInfo">
                  <span className="singlePostAuthor">Author:
                  <Link to={`/?user=${post.username}`} className="link">
                  <b>{post.username}</b>
                  </Link>
                  </span>
                  <span className="singlePostAuthor">{new Date(post.createdAt).toDateString()}</span>
              </div>
              {
                updateMode ? ( <textarea className="singlePostDescInput" /> ) : (
                    <p className="singlePostDesc">{post.desc}</p>
                ) }
             
            </div>
        </div>
    );
};

export default SinglePost;