
import React from "react";
import "./singlePost.css";
import plantImage from "./plant.jpg"

const SinglePost: React.FC<{}> = () => {
    return (
        <div className = "SinglePost">
            <div className = "SinglePostWrapper">
                <img
                src = {plantImage}
                alt = ''
                className = "singlePostImg"
                />
                <h1 className = "singlePostTitle">We have a long way to go!
                <div className="singlePostEdit">
                <i className=" singlePostIcon fas fa-trash-alt"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                <span>
                    Author: Mo
                </span>
                <span>1 day ago</span>
                </div>

                <p className="singlePostDesc">
                Details
                <br />
                <br />
                in addition
                </p>
      </div>
    </div>
  );
}



export default SinglePost;


