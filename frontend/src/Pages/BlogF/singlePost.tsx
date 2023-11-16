import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div>
      {postData && (
        <div>
          <h1>{postData.post_title}</h1>
          <p>{postData.post_content}</p>
          <p>Uploaded on: {new Date(postData.post_uploaded).toLocaleString()}</p>
          {imageSrc && <img src={imageSrc} alt="Post Image" style={{ maxWidth: "100%" }} />}
          <div>
            <h2>Comments</h2>
            <ul>
              {postData.comments.map((comment: any) => (
                <li key={comment.comment_id}>
                  <strong>{comment.userid}:</strong> {comment.comment_content}
                </li>
              ))}
            </ul>
          </div>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default SinglePost;
