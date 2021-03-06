import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import "./SinglePost.css"

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "https://share-feed-12.herokuapp.com/images/";
    const {user} = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    const handleUpdate = async(e)=>{
        try{

            await axiosInstance.put(`/posts/${post._id}`, {username:user.username, title,  desc });
            setUpdateMode(false)
        }catch(err){ }     
        
    }

    const handleDelete = async(e)=>{
        try{

            await axiosInstance.delete(`/posts/${post._id}`, {data :{username:user.username}});
            window.location.replace("/");
        }catch(err){ }      
    };

    useEffect(()=>{
          const getPost = async()=>{

            const res = await axiosInstance.get("/posts/"+path);
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
          }
          getPost();
     
    },[path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
             <img src={PF + post.photo} alt="" className="singlePostImg" />

                )}
                    {updateMode  ? (<input type="text" value={title} className="singlePostTitleInput" 
                    
                    autoFocus
                    onChange={(e)=> setTitle(e.target.value)}
                    />) : (
                        <h1 className="singlePostTitle">{title}
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
                updateMode ? ( <textarea className="singlePostDescInput" value={desc} onChange={(e)=> setDesc(e.target.value)} /> ) : (
                    <p className="singlePostDesc">{desc}</p>
                ) }
                {updateMode &&(

                <button className="singlePostButton" onClick={handleUpdate}>Update!</button>
                )}
            
            </div>
        </div>
    );
};

export default SinglePost;