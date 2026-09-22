import Hero from "../sections/Hero";
import Work from "../sections/Work";
import Capabilities from "../sections/Capabilities";
import About from "../sections/About";
import Timeline from "../sections/Timeline";
import Skills from "../sections/Skills";
import Award from "../sections/Award";
import Motion from "../sections/Motion";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Capabilities />
      <Timeline />
      <Skills />
      <Award />
      <Motion />
      <Contact />
    </>
  );
};

export default Home;