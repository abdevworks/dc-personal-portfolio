import "./App.scss";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Skills />
      <Portfolio />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
