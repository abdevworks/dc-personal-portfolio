import { ThemeProvider } from "styled-components";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import GlobalStyles from "./components/styles/Global";
import HeaderSection from "./components/HeaderSection";
import BackgroundColor from "./components/BackgroundColor";

import {
  featuredContent,
  skillContent,
  portfolioContent,
} from "./content";

const theme = {
  colors: {
    header: "#6700ee",
    logo: "#72e6ff",
    hero: "#6e00ff",
    skills: "#ff64cb",
    portfolio: "#f7f7f7",
  },
  medium: "800px",
  large: "1050px",
  xl: "1250px",
  xxl: "1550px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BackgroundColor>
        <HeaderSection
          logoText="Arkadiusz Biesiada"
        />
        <Hero
          title="Beutifuly Crafted Web Experiences"
          meet="Arkadiusza Biesiadę"
        />
        <Featured featuredContent={featuredContent} />
        <Skills skillContent={skillContent} />
        <Portfolio portfolioContent={portfolioContent} />
        <CallToAction />
        <Contact />
        <Footer />
      </BackgroundColor>
    </ThemeProvider>
  );
}

export default App;
