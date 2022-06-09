import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import FeaturedProject_mobile from "../sub-blocks/FeaturedProject_mobile";
import FeaturedProject_desktop from "../sub-blocks/FeaturedProject_desktop";
import { Typography, Box, Stack } from "@mui/material";
import FeaturedProject from "../custom-components/reusable/FeaturedProject";
import { mxn } from "../../styles/mixins";
//=
export default function Projects() {
  const localEats = {
    odd: false,
    level: "Full stack web app",
    projectName: "Local Eats",
    description:
      "Full stack web app that lets users search for restaurants near them and anywhere across Canada/USA. Features include filtered local business searches, credentials-based signup and login, bookmarks, and geolocation",
    tools: ["Next.js", "React.js", "Javascript", "Node", "Yarn", "NextAuth", "SendGrid", 'HTML & CSS'], // prettier-ignore
    githubLink: "https://github.com/JasonxPortfolio/local-eats",
    hostedLink: "https://localeats.vercel.app/",
    img: "/images/localeats_preview.png",
  };
  const smashBros = {
    odd: true,
    level: "Landing page",
    projectName: "Smash Bros Ultimate",
    description:
      "A fully responsive and professional-looking landing page for the Nintendo Switch's highest selling game",
    tools: ["HTML & CSS", "Javascript", "NPM", "Parcel"],
    githubLink: "https://github.com/JasonxPortfolio/Smash_bros_page",
    hostedLink: "https://smashbrosultimate.vercel.app/",
    img: "/images/smash_preview.png",
  };
  const monstercat = {
    odd: false,
    level: "Landing page",
    projectName: "Monstercat",
    description:
      "A replica for one of Monstercat Music's dedicated artist pages. This is one of the first landing pages I built once I finished my CSS courses.",
    tools: ["HTML & CSS"],
    githubLink: "https://github.com/Jason2B3/Monstercat",
    hostedLink: "https://monstercat.netlify.app/",
    img: "/images/monstercat_preview.png",
  };
  return (
    <SectionBlock>
      <NumberedHeader num="03." txt="Projects" />
      <Stack sx={styles.projectColumn}>
        <FeaturedProject_mobile dataObj={localEats} />
        <FeaturedProject_mobile dataObj={smashBros} />
        <FeaturedProject_mobile dataObj={monstercat} />
      </Stack>
      {/* <FeaturedProject_desktop/> */}
    </SectionBlock>
  );
}

const styles = {
  projectColumn: {
    display: "grid",
    gap: "2rem",
    justifyContent: "center",
  },
};