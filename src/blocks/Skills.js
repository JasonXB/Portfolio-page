import React from "react";
import { Typography, Box, Stack, Container } from "@mui/material";
import { mxn } from "../../styles/mixins";
import { containerDims } from "../../styles/breakpoints";
import SkillIcon from "../custom-components/reusable/SkillIcon";
import SkillGroup from "../custom-components/reusable/SkillGroup";

export default function Skills() {
  const core = [
    { lang: "HTML", url: "/skills/html.svg", alt: "HTML logo" },
    { lang: "CSS", url: "/skills/css.svg", alt: "CSS logo" },
    { lang: "SCSS", url: "/skills/scss.png", alt: "SCSS logo" },
    { lang: "JavaScript", url: "/skills/javascript.svg", alt: "JS logo" },
  ];
  const frameworks = [
    { lang: "React.js", url: "/skills/react.svg", alt: "React logo" },
    { lang: "Next.js", url: "/skills/nextjs.svg", alt: "Next.js logo" },
    { lang: "Material UI", url: "/skills/mui.svg", alt: "Material UI logo" },
  ];
  const databases = [
    { lang: "Firebase", url: "/skills/firebase.svg", alt: "Firebase logo" },
    { lang: "MongoDB", url: "/skills/mongodb.png", alt: "Mongo DB logo" },
  ];
  const authentication = [
    { lang: "Auth0", url: "/skills/oauth.svg", alt: "OAuth logo" },
    { lang: "Next Auth", url: "/skills/nextauth.png", alt: "Next.js logo" },
    { lang: "Sendgrid", url: "/skills/sendgrid.png", alt: "Sendgrid logo" },
  ];
  const hosting = [
    { lang: "Vercel", url: "/skills/vercel.png", alt: "Vercel logo" },
    { lang: "Netlify", url: "/skills/netlify.svg", alt: "Netlify logo" },
    { lang: "Hostinger", url: "/skills/hostinger.svg", alt: "Hostinger logo" },
  ];
  const pkgManagersBundlers = [
    { lang: "NPM", url: "/skills/npm.svg", alt: "NPM logo" },
    { lang: "Yarn", url: "/skills/yarn.svg", alt: "Yarn logo" },
    { lang: "Parcel", url: "/skills/parcel.svg", alt: "Parcel logo" },
  ];
  const versionControl = [
    { lang: "Git", url: "/skills/git.svg", alt: "Git logo" },
    { lang: "Github", url: "/skills/github.svg", alt: "Github logo" },
    { lang: "Git bash", url: "/skills/gitbash.svg", alt: "Gitbash logo" },
  ];
  const future = [
    { lang: "Typescript", url: "/skills/typescript.svg", alt: "TS logo" },
    { lang: "Node.js", url: "/skills/nodejs.svg", alt: "Node logo" },
  ];

  const allSkills = [core, frameworks, databases, authentication,hosting, pkgManagersBundlers, versionControl, future]; // prettier-ignore
  //! Refactor all 02. skills sets of elements
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
        <SkillGroup genre="Core Languages" dataObj={core} />
        <SkillGroup genre="Databases" dataObj={databases} />
        <SkillGroup genre="Authentication" dataObj={authentication} />
        <SkillGroup genre="Hosting Services" dataObj={hosting} />
        <SkillGroup
          genre="Package Managers + Module Bundlers"
          dataObj={pkgManagersBundlers}
        />
        <SkillGroup genre="Version Control" dataObj={versionControl} />
        <SkillGroup genre="Currently Learning" dataObj={future} />
      </Stack>
    </Box>
  );
}

