import React, { useState, useEffect } from "react";
import "./post.css";
import axios from "axios";
import { Link } from "react-router-dom";
import plantImage from './plant.jpg'
console.log(plantImage);
const Post: React.FC<{ post_id: number }> = ({ post_id }) => {
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/login_blog_list/`,
          {
            post_id,
          }
        );

        setPostData(response.data.user_data);
      } catch (error) {
        console.error("Error fetching post data:", error);
        // Handle errors (e.g., set a default value for postData)
      }
    };

    fetchData();
  }, [post_id]);

  return (
    <div className="post">
      {postData && (
        <>
          <img
            className="postMedia"
            src={"/src/Pages/BlogF/images/plant.jpg"} // Update this to use the actual image from the API
            alt=""
          />
          <div className="postInfo">
            <div className="postCats">
              {postData.categories?.map(
                (category: string, index: number) => (
                  <span key={index} className="postCat">
                    {category}
                  </span>
                )
              )}
            </div>
            <h5 className="postTitle">
              <Link className="link" to={`/singlePost/${post_id}`}>
                {postData.post_title}
              </Link>
            </h5>
            <hr />
            <p className="postDate">
              {postData.post_content.length > 20
                ? `${postData.post_content.substring(0, 40)}...`
                : postData.post_content}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
