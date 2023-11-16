import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./singlePost.css"; // Import your CSS file

const SinglePost: React.FC<{}> = () => {
  const { postId } = useParams<{ postId: string }>();
  const [postData, setPostData] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/login_blog_list/", {
          post_id: postId,
        });
        setPostData(response.data.user_data);

        // Fetch image
        const imageResponse = await axios.post(
          "http://127.0.0.1:8000/login_blog_images/",
          {
            post_id: postId,
          },
          {
            responseType: 'arraybuffer',
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div className="singlePost singlePostWrapper" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      {postData && (
        <div>
          <h1 className="singlePostTitle">{postData.post_title}</h1>
          {imageSrc && <img src={imageSrc} alt="Post Image" className="singlePostImg" />}
          <div className="singlePostInfo">
            <p>
              Uploaded on: {new Date(postData.post_uploaded).toLocaleString()} by{" "}
              <span className="singlePostAuthor">{postData.userid}</span>
            </p>
          </div>
          <p className="singlePostDesc">{postData.post_content}</p>
         

         
          <div>
            <h2>Comments</h2>
            <ul className="commentsList">
              {postData.comments.map((comment: any) => (
                <li key={comment.comment_id} className="commentItem">
                  <div className="commentContent">
                    <strong>{comment.userid}:</strong> {comment.comment_content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;