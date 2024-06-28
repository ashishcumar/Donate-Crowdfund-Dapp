import { Grid } from "@chakra-ui/react";
import AboutUs from "./Components/AboutUs";
import WhyUs from "./Components/WhyUs";
import WhatBeDo from "./Components/WhatBeDo";
import LandingSection from "./Components/LandingSection";
import Achievements from "./Components/Achievements";
import Partners from "./Components/Partners";
import Projects from "./Components/Projects";
import JoinUs from "./Components/JoinUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <Grid>
      <LandingSection />
      <Achievements />
      <AboutUs />
      <WhyUs />
      <WhatBeDo />
      <JoinUs />
      <Projects />
      <Partners />
      <Footer />
    </Grid>
  );
}

export default App;
