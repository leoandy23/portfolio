import React from "react";
import Navbar from "../components/sections/Navbar";
import HeroImage from "../components/sections/HeroImage";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <About></About>
      <Services></Services>
      <Works></Works>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
