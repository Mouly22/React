import React from "react";
import "./post.css"
import plantImage from "./plant.jpg"
import { Link } from "react-router-dom";
const Post: React.FC<{}> = () => {
    return (
        <div className = "post">
            <img
            className = "PostImg"
            src={plantImage}
            alt = ""
            />
            <div className = "postInfo">
                <div className = "postCats">
                    <span className = "postCat">Seeds</span>
                    <span className = "postCat"> Leafs</span>
                </div>
                <b>
                <span className ="postTitle">
                <Link className="link" to="/singlePost">
                should we use good fertilizers?   
                </Link>
                
                </span>
                </b>
                <hr/>
                <span className = "postDate"> 5 hours ago</span>

            </div>
        </div>
    
    );
};

export default Post;