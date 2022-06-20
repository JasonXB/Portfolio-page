import React from "react";
import { Stack } from "@mui/material";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import AboutMeCard from "../sub-blocks/AboutMeCard";

//=
export default function About() {
  const card1 = {
    header: "Education",
    miniHeader1: "Degree",
    answer1: "Mechanical Engineering",
    miniHeader2: "University",
    answer2: "UOIT",
    img: "/images/rogue.png",
    // img: "/images/pokeball.png",
  };
  const card2 = {
    header: "Personal Details",
    miniHeader1: "Name",
    answer1: "Jason Bustamante",
    miniHeader2: "Age",
    answer2: "25 (and a half!)",
    img: "/images/pokeball.png",
  };
  const card3 = {
    header: "Other Interests",
    miniHeader1: "Professional",
    answer1: "3D modelling & drafting",
    miniHeader2: "Casual",
    answer2: "Playing obscure indie games",
    img: "/images/rogue.png",
    // img: "/images/pokeball.png",
  };
  return (
    <SectionBlock>
      <NumberedHeader navID={"about_me"} num="01." txt="About Me" />
      <Stack sx={styles.grid}>
        <AboutMeCard cardData={card1} />
        <AboutMeCard cardData={card2} />
        <AboutMeCard cardData={card3} />
      </Stack>
    </SectionBlock>
  );
}

const styles = {
  grid: {
    display: "grid",
    gap: 4,
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    ["@media (min-width: 850px)"]: { gridTemplateColumns: "1fr 1fr 1fr" },
  },
};
/*

*/