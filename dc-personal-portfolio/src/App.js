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

import { featuredContent } from "./content";

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
      <HeaderSection />
      <Hero
        title="Beutifuly Crafted Web Experiences"
        meet="Arkadiusz Biesiada"
      />
      <Featured featuredContent={featuredContent} />
      <Skills />
      <Portfolio />
      <CallToAction />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
