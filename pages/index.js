import React from "react";
import PaddedBlock from "../src/custom-components/PaddedBlock";
import Navbar from "../src/blocks/Navbar";
import Intro from "../src/blocks/Intro";
import About from "../src/blocks/About";
import Skills from "../src/blocks/Skills";
import { Typography, Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <PaddedBlock>
      <Navbar />
      <Intro />
      {/* <About /> */}
      <Skills/>
      <Box sx={{ height: "100vh" }}></Box>
    </PaddedBlock>
  );
}
