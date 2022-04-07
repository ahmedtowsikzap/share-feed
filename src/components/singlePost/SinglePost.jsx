import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./SinglePost.css"

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

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
             <img src="https://images.unsplash.com/photo-1501425359013-96058e410cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80" alt="" className="singlePostImg" />

             <h1 className="singlePostTitle">lorem iispd jta sid  idtjac  d
             <div className="singlePostEdit">
             <i className="singlePostIcon far fa-edit"></i>
             <i className="singlePostIcon fa-solid fa-trash-arrow-up"></i>
             </div>
             </h1>
              <div className="singlePostInfo">
                  <span className="singlePostAuthor">Author: <b>Ahmed</b></span>
                  <span className="singlePostAuthor">3 hours ago!</span>
              </div>
              <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum beatae, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum bLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora accusantium, cumque sapiente totam non, hic laborum b dolor ipsa veritatis alias illum? Quia soluta ipsa laudantium eos. Temporibus, explicabo corrupti!</p>
            </div>
        </div>
    );
};

export default SinglePost;