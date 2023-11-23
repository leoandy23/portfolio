import React from "react";
import Navbar from "../components/sections/Navbar";
import HeroImage from "../components/sections/HeroImage";
import About from "../components/sections/About";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <About></About>
    </div>
  );
};

export default HomePage;
