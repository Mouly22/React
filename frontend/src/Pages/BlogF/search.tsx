import React, { useState, useEffect } from "react";
import "./Blog.css";
import Post from "./post";
import axios from "axios";

const Search: React.FC<{}> = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const searchWord = localStorage.getItem("searchpost") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("GG");
        const response = await axios.post("http://127.0.0.1:8000/search_blog_list/", {
          search_word: searchWord,
        });
        console.log(posts);
        setPosts(response.data); // Assuming the response is an array of posts
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Handle errors (e.g., set a default value for posts)
      }
    };

    fetchData();
  }, [searchWord]); // Include searchWord in the dependency array to re-run effect when it changes

  return (
    <div className="blog" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      {Array.isArray(posts) ? (
        posts[0] === false ? (
          <p>Nothing found</p>
        ) : (
          posts.map((post) => (
            <Post key={post.post_id} post_id={post.post_id} />
          ))
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Search;