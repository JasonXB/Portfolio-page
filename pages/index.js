import React from "react";
import PaddedBlock from "../src/custom-components/PaddedBlock";
import Navbar from "../src/blocks/Navbar";
import Intro from "../src/blocks/Intro";

export default function Home() {
  return (
    <PaddedBlock>
      <Navbar />
      <Intro />
    </PaddedBlock>
  );
}
