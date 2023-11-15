import React, { useState, useEffect } from "react";
import "./Blog.css";
import Post from "./post";
import axios from "axios";
import Sidebar from "./Sidebar";

const Blog: React.FC<{}> = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/register_blog_list/");
        setPosts(response.data); // Assuming the response is an array of posts
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Handle errors (e.g., set a default value for posts)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="blog-container" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.post_id} post_id={post.post_id} />
        ))}
      </div>

      <Sidebar />

    </div>
  );
};

export default Blog;