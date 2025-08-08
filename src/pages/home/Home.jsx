import React, { useEffect } from "react";
import BannerSlider from "./BannerSlider";
import ForYou from "./ForYou";
import OurStory from "./OurStory";
import Gallary from "./Gallary";
import ExpireItems from "./ExpireItems";

const Home = () => {
  useEffect(() => {
    document.title = "Chicken-Hub | Home";
  }, []);
  return (
    <div>
      <BannerSlider></BannerSlider>
      <OurStory></OurStory>
      <ExpireItems></ExpireItems>
      <ForYou></ForYou>
      <Gallary></Gallary>
    </div>
  );
};

export default Home;
