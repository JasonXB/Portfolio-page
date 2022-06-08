import React from "react";
import { Typography, Box, Stack, Container } from "@mui/material";
import { mxn } from "../../styles/mixins";
import { containerDims } from "../../styles/breakpoints";
import SkillIcon from "../custom-components/reusable/SkillIcon";
export default function Skills() {
  const core = [
    { lang: "HTML", url: "/skills.html.svg", alt: "HTML logo" },
    { lang: "CSS", url: "/skills.css.svg", alt: "CSS logo" },
    { lang: "SASS", url: "/skills.sass.svg", alt: "SASS logo" },
    { lang: "JavaScript", url: "/skills.javascript.svg", alt: "JS logo" },
  ];
  const frameworks = [
    { lang: "React", url: "/skills.react.svg", alt: "React logo" },
    { lang: "Next.js", url: "/skills.nextjs.svg", alt: "Next.js logo" },
    { lang: "Material UI", url: "/skills.mui.svg", alt: "Material UI logo" },
  ];
  const databases = [
    { lang: "MongoDB", url: "/skills.mongodb.svg", alt: "Mongo DB logo" },
    { lang: "Firebase", url: "/skills.firebase.svg", alt: "Firebase logo" },
  ];
  const authentication = [
    { lang: "Auth0", url: "/skills.oauth.svg", alt: "OAuth logo" },
    { lang: "Next Auth", url: "/skills.nextauth.png", alt: "Next.js logo" },
  ];
  const hosting = [
    { lang: "Vercel", url: "/skills.vercel.svg", alt: "Vercel logo" },
    { lang: "Netlify", url: "/skills.netlify.svg", alt: "Netlify logo" },
    { lang: "Hostinger", url: "/skills.hostinger.svg", alt: "Hostinger logo" },
  ];
  const pkgManagersBundlers = [
    { lang: "NPM", url: "/skills.npm.svg", alt: "NPM logo" },
    { lang: "Yarn", url: "/skills.yarn.svg", alt: "Yarn logo" },
    { lang: "Parcel", url: "/skills.parcel.svg", alt: "Parcel logo" },
  ];
  const other = [
    { lang: "Git", url: "/skills.git.svg", alt: "Git logo" },
    { lang: "Github", url: "/skills.github.svg", alt: "Github logo" },
    { lang: "Sendgrid", url: "/skills.sendgrid.svg", alt: "Sendgrid logo" },
  ];
  const future = [
    { lang: "Typescript", url: "/skills.typescript.svg", alt: "TS logo" },
    { lang: "Node", url: "/skills.node.svg", alt: "Node logo" },
  ];
  return (
    <Box sx={containerDims}>
      <Box sx={{ ...mxn.flexRow, alignItems: "end", mb: "2.25rem" }}>
        <Typography variant="span" sx={{ fontSize: "1.25rem", mr: 1 }}>
          02.
        </Typography>
        <Typography
          variant="h3"
          sx={(mui) => ({ color: mui.palette.header.main })}
        >
          Skills
        </Typography>
      </Box>
      <Stack>
        <Typography variant="h4">CORE LANGUAGES</Typography>
        {/* <SkillIcon skill="React" imgLink="/images/me.jpg" alt="react logo" /> */}
        <SkillIcon skill="React" imgLink="/skills/css.svg" alt="react logo" />
        <SkillIcon skill="React" imgLink="/skills/nextauth.png" isPNG="true" alt="react logo" />
        {/* <Typography variant="">FRAMEWORKS</Typography> */}
      </Stack>
    </Box>
  );
}

const styles = {};
