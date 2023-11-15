import React, { useState, useEffect } from "react";
import "./post.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Post: React.FC<{ post_id: number }> = ({ post_id }) => {
  const [postData, setPostData] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch post data
        const response = await axios.post(`http://127.0.0.1:8000/login_blog_list/`, {
          post_id,
        });
        setPostData(response.data.user_data);

        // Fetch image
        const imageResponse = await axios.post(
          "http://127.0.0.1:8000/login_blog_images/",
          {
            post_id,
          },
          {
            responseType: 'arraybuffer',  // This is important for binary data
          }
        );

        const base64 = btoa(
          new Uint8Array(imageResponse.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );

        setImageSrc(`data:${imageResponse.headers['content-type']};base64,${base64}`);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchData();
  }, [post_id]);

  return (
    <div className="post">
      {postData && (
        <>
          {imageSrc && (
            <img
              className="postImg"
              src={imageSrc}
              alt={`/src/Pages/BlogF/images/${postData.post_image}`}
            />
          )}
          <div className="postInfo">
            <div className="postCats">
              {postData.categories?.map((category: string, index: number) => (
                <span key={index} className="postCat">
                  {category}
                </span>
              ))}
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
