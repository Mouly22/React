import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./singlePost.css"; // Import your CSS file

const SinglePost: React.FC<{}> = () => {
  const { postId } = useParams<{ postId: string }>();
  const [postData, setPostData] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [newComment, setNewComment] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>("");
  const userId = localStorage.getItem('userid');

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

  const handleCommentSubmit = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/register_add_comment/", {
        post_id: postId,
        userid: userId,
        comment_content: newComment,
      });
      // Clear the comment input
      setNewComment("");
  
      // Fetch comments immediately after posting
      const updatedPostData = await axios.post("http://127.0.0.1:8000/login_blog_list/", {
        post_id: postId,
      });
  
      // Update the comments state
      setPostData(updatedPostData.data.user_data);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
    setEditedContent(postData.post_content);
  };

  const handleUpdateClick = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/update_post_content/", {
        post_id: postId,
        updated_content: editedContent,
      });

      // Fetch updated post data
      const updatedPostData = await axios.post("http://127.0.0.1:8000/login_blog_list/", {
        post_id: postId,
      });

      // Update the post data state
      setPostData(updatedPostData.data.user_data);

      // Exit edit mode
      setEditMode(false);
    } catch (error) {
      console.error("Error updating post content:", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/delete_post/", {
        post_id: postId,
      });

      // After deletion, you might want to navigate the user to another page or handle it accordingly
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="singlePost singlePostWrapper" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      {postData && (
        <div>
          {imageSrc && <img src={imageSrc} alt="Post Image" className="singlePostImg" />}
          <h1 className="singlePostTitle">{postData.post_title}</h1>
          <div className="singlePostInfo">
            <p>
              Uploaded on: {new Date(postData.post_uploaded).toLocaleString()} by{" "}
              <span className="singlePostAuthor">{postData.userid}</span>
            </p>
            <div className="buttonContainer">
              {!editMode && (
                <>
                  <button onClick={handleEditClick} className="editButton">
                    Edit
                  </button>
                  <button onClick={handleDeleteClick} className="deleteButton">
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
          {editMode ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="singlePostDescEdit"
            ></textarea>
          ) : (
            <p className="singlePostDesc">{postData.post_content}</p>
          )}
          <div className="update">
            {editMode && (
              <>
                <button onClick={handleUpdateClick} className="updateButton">
                  Update
                </button>
                <button onClick={() => setEditMode(false)} className="cancelButton">
                  Cancel
                </button>
              </>
            )}
          </div>
          {/* Comment Form */}
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
          <div className="postCommentSection">
            {!editMode && (
              <>
                <textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button onClick={handleCommentSubmit}>Post Comment</button>
              </>
            )}
           
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;

