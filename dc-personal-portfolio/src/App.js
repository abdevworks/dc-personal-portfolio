import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";
import HeaderSection from "./components/HeaderSection";
import BackgroundColor from "./components/BackgroundColor";


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
        <HeaderSection logoText="Arkadiusz Biesiada" />
        <Outlet />
        <Footer />
      </BackgroundColor>
    </ThemeProvider>
  );
}

export default App;
