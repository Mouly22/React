import React from "react";
import "./Blog.css";
import Post from "./post";

const Blog: React.FC<{}> = () => {
    return (
        <div className = "blog">
            <Post/>
            <Post/>
            <Post/>
        </div>
    
    );
};

export default Blog;