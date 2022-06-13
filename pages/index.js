import React from "react";
import PaddedBlock from "../src/custom-components/PaddedBlock";
import Navbar from "../src/blocks/Navbar";
import Intro from "../src/blocks/Intro";
import About from "../src/blocks/About";
import Skills from "../src/blocks/Skills";
import Projects from "../src/blocks/Projects";
import Contact from "../src/blocks/Contact";
import TabTitle from "../src/custom-components/reusable/TabTitle";

export default function Home() {
  return (
    <PaddedBlock>
      <TabTitle title="Jason B" />
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </PaddedBlock>
  );
}
