import React from "react";
import { Stack } from "@mui/material";
import { mxn } from "../../styles/mixins";
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
  };
  const card2 = {
    header: "Personal Details",
    miniHeader1: "Name",
    answer1: "Jason Bustamante",
    miniHeader2: "Age",
    answer2: "25 (and a half!)",
    img: "/images/rogue.png",
  };
  const card3 = {
    header: "Other Interests",
    miniHeader1: "Professional",
    answer1: "3D modelling & drafting",
    miniHeader2: "Casual",
    answer2: "Playing obscure indie games",
    img: "/images/rogue.png",
  };
  return (
    <SectionBlock>
      <NumberedHeader num="01." txt="About Me" />
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyItems: "center",
        }}
      >
        <AboutMeCard cardData={card1} />
        <AboutMeCard cardData={card2} />
        <AboutMeCard cardData={card3} />
      </Stack>
    </SectionBlock>
  );
}

/*
<Typography variant="p" color="secondary">
              NAME: Jason Bustamante
            </Typography>
            <Typography variant="p" color="secondary">
              AGE: 25
            </Typography>
            <Typography variant="p" color="secondary">
              DEGREE: Mechanical Engineering
            </Typography>
            <Typography variant="p" color="secondary">
              GRADUATED FROM: University of Ontario Institute of Technology
            </Typography>
            <Typography variant="p" color="secondary">
              LOCATION: Ontario, Canada (willing to relocate)
            </Typography>
            <Typography variant="p" color="secondary">
              EMAIL: jasonxb96@gmail.com
            </Typography>
*/
