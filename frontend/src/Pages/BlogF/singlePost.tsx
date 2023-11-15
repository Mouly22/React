import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePost: React.FC<{}> = () => {
  const { postId } = useParams<{ postId: string }>();
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/login_blog_list/", {
          post_id: postId,
        });
        setPostData(response.data.user_data);
      } catch (error) {
        console.error("Error fetching post data:", error);
        // Handle errors (e.g., set a default value for postData)
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div>
      {postData && (
        <>
          <h1>{postData.post_title}</h1>
          <p>{postData.post_content}</p>
          <p> Post was uploaded on: {postData.post_uploaded}</p>
          <p>{postData.post_image}</p>
          {/* Add more details as needed */}
        </>
      )}
    </div>
  );
};

export default SinglePost;


