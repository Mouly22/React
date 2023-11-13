import React, { useState, useEffect } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import plantImage from "./plant.jpg";

const useStyles = makeStyles((theme) => ({
  post: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  postMedia: {
    width: 260,
  },
  postInfo: {
    flex: 1,
    padding: theme.spacing(2),
  },
  postCats: {
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  postCat: {
    marginRight: theme.spacing(1),
  },
  postTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  postDate: {
    fontSize: "0.8rem",
    color: theme.palette.text.secondary,
  },
}));

const Post: React.FC<{ post_id: number }> = ({ post_id }) => {
  const classes = useStyles();
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/login_blog_list/`, {
          post_id,
        });

        setPostData(response.data.user_data);
      } catch (error) {
        console.error("Error fetching post data:", error);
        // Handle errors (e.g., set a default value for postData)
      }
    };

    fetchData();
  }, [post_id]);

  return (
    <Card className={classes.post}>
      {postData && (
        <>
          <CardMedia
            className={classes.postMedia}
            component="img"
            alt=""
            image={plantImage}
          />
          <div className={classes.postInfo}>
            <div className={classes.postCats}>
              {postData.categories?.map((category: string, index: number) => (
                <span key={index} className={classes.postCat}>
                  {category}
                </span>
              ))}
            </div>
            <Typography variant="h5" className={classes.postTitle}>
              <Link className="link" to={`/singlePost/${post_id}`}>
                {postData.post_title}
              </Link>
            </Typography>
            <Divider />
            <Typography variant="caption" className={classes.postDate}>
            {postData.post_content.length > 20
            ? `${postData.post_content.substring(0, 40)}...`
            : postData.post_content}
            </Typography>
          </div>
        </>
      )}
    </Card>
  );
};

export default Post;
