import React, { useLayoutEffect } from "react";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

import { skillContent, portfolioContent } from "../content";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {" "}
      <Hero
        title="Pozwól, aby twoje pomysły stały się rzeczywistością."
        meet="Arkadiusza Biesiadę"
      />
      <Featured portfolioContent={portfolioContent} />
      <Skills skillContent={skillContent} />
      <Portfolio portfolioContent={portfolioContent} />
      <CallToAction />
      <Contact />
    </>
  );
};

export default Home;
