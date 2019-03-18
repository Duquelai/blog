import React from "react";
import imgPost from "../../Assets/img/img_post.jpg";
import PostContent from "../Post/PostContent";
import { Link } from "react-router-dom";
const Post = ({ ...props }) => {
  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          minHeight: 250,
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            flex: "0.4 1 0%",
            minWidth: 600
          }}
        >
          <div
            style={{
              backgroundImage: `url(${imgPost})`,
              backgroundSize: "cover",
              width: "100%",
              height: 250,
              marginBottom: 20
            }}
          />
          <Link
            to={{
              pathname: `/post/${props.title}`,
              img: imgPost,
              title: props.title,
              content: props.content,
              author: props.author
            }}
            style={{
              fontSize: 20,
              textAlign: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: 20
            }}
          >
            {props.title}
          </Link>
          <p style={{ fontSize: 15, color: "gray" }}>{props.author}</p>
          <p
            style={{
              maxHeight: 150,
              wordWrap: "break-word",
              textAlign: "justify"
            }}
          >
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Post;
