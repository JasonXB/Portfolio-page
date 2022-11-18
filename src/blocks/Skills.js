import React from "react";
import { Stack } from "@mui/material";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import SkillGroup from "../custom-components/reusable/SkillGroup";
import { skillsBP } from "../../styles/breakpoints";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";

export default function Skills() {
  const core = [
    { lang: "HTML", url: "/skills/html.svg", alt: "HTML logo" },
    { lang: "CSS", url: "/skills/css.svg", alt: "CSS logo" },
    { lang: "Javascript", url: "/skills/javascript.svg", alt: "JS logo" },
    { lang: "Typescript", url: "/skills/typescript.svg", alt: "TS logo" },
  ];
  const frameworks = [
    { lang: "React.js", url: "/skills/react.svg", alt: "React logo" },
    { lang: "Next.js", url: "/skills/nextjs.svg", alt: "Next.js logo" },
    { lang: "Redux", url: "/skills/redux.png", alt: "Redux logo" },
  ];
  const databases = [
    { lang: "MongoDB", url: "/skills/mongodb.png", alt: "Mongo DB logo" },
    { lang: "MySQL", url: "/skills/mysql.png", alt: "MySQL logo" },
    { lang: "Firebase", url: "/skills/firebase.svg", alt: "Firebase logo" },
  ];
  const authentication = [
    { lang: "Auth0", url: "/skills/oauth.svg", alt: "OAuth logo" },
    { lang: "NextAuth", url: "/skills/nextauth.png", alt: "Next Auth logo" },
    { lang: "Sendgrid", url: "/skills/sendgrid.png", alt: "Sendgrid logo" },
  ];
  const hosting = [
    { lang: "Azure", url: "/skills/azure.png", alt: "Azure logo" },
    { lang: "Vercel", url: "/skills/vercel.png", alt: "Vercel logo" },
    { lang: "Netlify", url: "/skills/netlify.svg", alt: "Netlify logo" },
    { lang: "AWS", url: "/skills/aws.png", alt: "Hostinger logo" },
  ];
  const pkgManagersBundlers = [
    { lang: "NPM", url: "/skills/npm.svg", alt: "NPM logo" },
    { lang: "Yarn", url: "/skills/yarn.svg", alt: "Yarn logo" },
    { lang: "Webpack", url: "/skills/webpack.png", alt: "Webpack logo" },
    { lang: "Parcel", url: "/skills/parcel.svg", alt: "Parcel logo" },
  ];
  const versionControl = [
    { lang: "Git", url: "/skills/git.svg", alt: "Git logo" },
    { lang: "Github", url: "/skills/github.svg", alt: "Github logo" },
    { lang: "Git bash", url: "/skills/gitbash.svg", alt: "Gitbash logo" },
  ];
  const cssFrames = [
    { lang: "SCSS", url: "/skills/scss.png", alt: "SCSS logo" },
    { lang: "Material UI", url: "/skills/mui.svg", alt: "Material UI logo" },
    { lang: "Tailwind", url: "/skills/tailwind.png", alt: "Tailwind logo" },
  ];
  const backend = [
    { lang: "Node", url: "/skills/nodejs.svg", alt: "Node logo" },
    { lang: "Express", url: "/skills/express.png", alt: "Express logo" },
  ];
  const testing = [
    { lang: "Jest", url: "/skills/jest.svg", alt: "Jest logo" },
    { lang: "Cypress", url: "/skills/cy.png", alt: "Cypress logo" },
    { lang: "RTL", url: "/skills/rtl.svg", alt: "RTL logo" }, // prettier-ignore
  ];
  // navID makes it so clicking the nav anchors will scroll you down to this section
  return (
    <SectionBlock>
      <NumberedHeader navID={"skills"} num="02." txt="Skills" />
      <Stack sx={styles.skillgroups}>
        <SkillGroup genre="Core Languages" data={core} />
        <SkillGroup genre="Frontend" data={frameworks} />
        <SkillGroup genre="Backend" data={backend} />
        <SkillGroup genre="CSS Frameworks" data={cssFrames} />
        <SkillGroup genre="Version Control" data={versionControl} />
        <SkillGroup genre="Testing" data={testing} />
        <SkillGroup genre="Hosting Services" data={hosting} />
        <SkillGroup genre="Databases" data={databases} />
        <SkillGroup genre="Package Management" data={pkgManagersBundlers} />
        <SkillGroup genre={`Authentication`} data={authentication} />
      </Stack>
    </SectionBlock>
  );
}

const styles = {
  skillgroups: {
    display: "grid",
    gap: "1rem",
    [skillsBP.twoColumns]: { gridTemplateColumns: "1fr 1fr" },
    ["@media (min-width: 1080px)"]: { gridTemplateColumns: "1fr 1fr 1fr" },
  },
};
