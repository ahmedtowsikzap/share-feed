import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setposts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
