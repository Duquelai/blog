import React from "react";
import background from "../../Assets/img/background.jpg";

const Header = () => {
  return (
    <>
      <header
        className="masthead"
        style={{
          display: "flex",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          width: "100%",
          height: 550,
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: 60
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignContent: "center",
            textAlign: "center",
            color: "white"
          }}
        >
          <h1 style={{ fontSize: 55, fontWeight: 600 }}>Blog</h1>
          <h5>Otario eu vou te avisar, o teu intelecto é de mosca de bar</h5>
        </div>
      </header>
    </>
  );
};

export default Header;
