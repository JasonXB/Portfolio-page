import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import { Stack, Box, Typography } from "@mui/material";
import FeaturedProject from "../custom-components/reusable/FeaturedProject";
import { projectsBP } from "../../styles/breakpoints";
//=
export default function Projects() {
  const localEats = {
    odd: false,
    projectName: "Local Eats",
    description:
      "Lets users search for restaurants nearby or anywhere across Canada/USA. Features include location detection, filtered local business searches, credentials-based signup and login, bookmarks, etc",
    tools: ["Next.js", "React.js", "Javascript", "Node", "Yarn", "NextAuth", "SendGrid", "HTML", "CSS"], // prettier-ignore
    toolsString:
      "Next.js, React.js, Javascript, Node, Yarn, NextAuth, SendGrid, HTML & CSS",
    githubLink: "https://github.com/JasonxPortfolio/local-eats",
    hostedLink: "https://localeats.vercel.app/",
    img: "/images/localeats_preview.png",
  };
  const smashBros = {
    odd: true,
    projectName: "Smash Bros Ultimate",
    description:
      "A fully responsive and professional-looking landing page for the Nintendo Switch's highest selling game",
    tools: ["HTML", "CSS", "Javascript", "NPM", "Parcel"],
    toolsString: "HTML & CSS, Javascript, NPM, Parcel",
    githubLink: "https://github.com/JasonxPortfolio/Smash_bros_page",
    hostedLink: "https://smashbrosultimate.vercel.app/",
    img: "/images/smash_preview.png",
  };
  const monstercat = {
    odd: false,
    projectName: "Monstercat Music",
    description:
      "A replica for one of Monstercat's dedicated artist pages. This is one of the first landing pages I built once I finished my CSS courses.",
    tools: ["HTML", "CSS"],
    toolsString: "HTML & CSS",
    githubLink: "https://github.com/Jason2B3/Monstercat",
    hostedLink: "https://monstercat.netlify.app/",
    img: "/images/monstercat_preview.png",
  };
  return (
    <SectionBlock>
      <NumberedHeader num="03." txt="Projects" />
      <Stack>
        <Box sx={{ [projectsBP.layoutChange1]: { mb: "4rem" } }}>
          <Typography variant="h3" color="secondary" sx={styles.subheader}>
            Full-stack Web Apps
          </Typography>
          <FeaturedProject dataObj={localEats} mb="4rem" />
        </Box>
        <Typography variant="h3" color="secondary" sx={styles.subheader}>
          Landing Pages
        </Typography>
        <Box sx={styles.projectColumn}>
          <FeaturedProject dataObj={smashBros} mb="2rem" />
          <FeaturedProject dataObj={monstercat} mb="4rem" />
        </Box>
      </Stack>
    </SectionBlock>
  );
}

const styles = {
  projectColumn: {
    ["@media (min-width: 800px)"]: {
      display: "grid",
      gap: "2rem",
      gridTemplateColumns: "1fr 1fr",
      justifyContent: "center",
    },
    ["@media (min-width: 1200px)"]: {
      display: "block",
    },
  },
  subheader: { mb: "2rem", textAlign: "center" },
};
