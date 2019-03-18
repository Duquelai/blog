import React from "react";
import Navbar from "./Components/Home/Navbar";
import Header from "./Components/Home/Header";
import Body from "./Components/Home/Body";

import Footer from "./Components/Home/Footer";

const App = () => {
  return (
    <>
      <Navbar theme="light" />
      <Header />

      <Body />
      <Footer />
    </>
  );
};
export default App;
