import React, { useState } from "react";
import axios from "axios";
import "./write.css";
import BlogImg from "./images/b1.jpg";

const BlogForm: React.FC = () => {
  // Retrieve user data from local storage
  const userId = localStorage.getItem("userid");
  const userType = localStorage.getItem("user_type");

  // State to manage form data
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [postImage, setPostImage] = useState<File | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data (add your own validation logic)

    // Prepare data for the main API request
    const postData = {
      post_id: null,
      userid: userId,
      user_type: userType,
      post_title: postTitle,
      post_content: postContent,
      post_uploaded: null,
      post_image: "kaka",
      comments: null,
    };

    // Make the main API request to create the blog post
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register_blog_list/",
        postData
      );

      console.log("Post created successfully:", response.data);

      // Check if an image is selected
      if (postImage) {
        // Prepare data for the image request
        const imageData = new FormData();
        imageData.append("post_id", response.data.post_id.toString());
        imageData.append("image", postImage);

        // Make the image request to associate the image with the blog post
        await axios.post(
          "http://127.0.0.1:8000/register_add_blog_images/",
          imageData
        );

        console.log("Image associated with the post successfully");
      }

      // Optionally reset form fields or perform other actions after successful submission
      setPostTitle("");
      setPostContent("");
      setPostImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle errors (e.g., show an error message to the user)
    }
  };

  // Handle image file input
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPostImage(file);
  };

  return (
    <div className="write">
      <img className="writeImg" src={BlogImg} alt="" />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <button
            className="writeImageAttachButton"
            type="button"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            Add Image
          </button>
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Write a status.."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
