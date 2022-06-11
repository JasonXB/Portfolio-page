import React from "react";
import PaddedBlock from "../src/custom-components/PaddedBlock";
import Navbar from "../src/blocks/Navbar";
import Intro from "../src/blocks/Intro";
import About from "../src/blocks/About";
import Skills from "../src/blocks/Skills";
import Projects from "../src/blocks/Projects";
import Contact from "../src/blocks/Contact";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <PaddedBlock>
      <Navbar />
      {/* <Intro /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      <Contact/>
      <Skills/>
      <Box sx={{ height: "500vh" }}></Box>
    </PaddedBlock>
  );
}
