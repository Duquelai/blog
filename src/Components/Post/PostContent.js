import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import imgPost from "../../Assets/img/img_post.jpg";

const PostContent = ({ ...props }) => {
  console.log(props);

  return (
    <>
      <Navbar theme="dark" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            backgroundImage: `url(${props.location.img})`,
            backgroundSize: "cover",
            width: "100%",
            minHeight: 600,
            marginBottom: 80,
            flexDirection: "column"
          }}
        />
        <div
          style={{
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center"
          }}
        >
          <h1 style={{ fontSize: 20, textAlign: "center" }}>
            {props.location.title}
          </h1>
          <p style={{ fontSize: 15, color: "gray" }}>{props.location.author}</p>
          <p style={{ textAlign: "justify" }}>{props.location.content}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PostContent;
