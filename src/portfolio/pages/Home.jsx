import React from "react";
import HeroSection from "../components/section/HeroSection";
import HomeSection from "../components/section/HomeSection";
import AboutSection from "../components/section/AboutSection";
import ProductSection from "../components/section/ProductSection";
import SocialHandleSection from "../components/section/SocialHandleSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeSection />
      <AboutSection />
      <ProductSection />
      <SocialHandleSection />
    </>
  );
};

export default Home;
