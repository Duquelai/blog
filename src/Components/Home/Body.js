import React from "react";
import Post from "./Post";

const Body = ({ children }) => {
  console.log(children);

  let posts = (
    <Post
      title={
        "Eu acho que cansou de reclamar e resolveu fazer algo a respeito..."
      }
      content={
        "O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia."
      }
      author={"Charlie Brown Jr"}
      data={"Wed Mar 13 2019"}
    />
  );

  return <div style={{ display: "flex", flexDirection: "row" }}>{posts}</div>;
};

export default Body;
