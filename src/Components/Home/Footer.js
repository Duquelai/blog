import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          marginTop: 30,
          height: 200,
          borderTop: "1px solid #dee2e6",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 30
          }}
        >
          <i className="fab fa-2x fa-facebook" style={{ margin: 10 }} />
          <i className="fab fa-2x fa-linkedin" style={{ margin: 10 }} />
          <i className="fab fa-2x fa-github" style={{ margin: 10 }} />
        </div>
        <p style={{ color: "#62596f", fontWeight: 100 }}>
          Copyright © Nicolai 2019, All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
