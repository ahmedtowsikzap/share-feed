import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import TopHero from "../../components/hero/TopHero";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { axiosInstance } from "../../config";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()
 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts"+ search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <TopHero/>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
