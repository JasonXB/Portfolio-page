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
    { lang: "Vue.js", url: "/skills/vue.svg", alt: "Vue logo" },
  ];
  const noSqlDatabases = [
    { lang: "MongoDB", url: "/skills/mongodb.png", alt: "Mongo DB logo" },
    { lang: "Firebase", url: "/skills/firebase.svg", alt: "Firebase logo" },
    { lang: "Redis", url: "/skills/redis.svg", alt: "Redis logo" },
    { lang: "DynamoDB", url: "/skills/dynamo_db.svg", alt: "Dynamo DB logo" },
  ];
  const relationalDatabases = [
    { lang: "Postgres", url: "/skills/postgres.svg", alt: "Postgres logo" },
    { lang: "MySQL", url: "/skills/mysql.png", alt: "MySQL logo" },
    { lang: "BigQuery", url: "/skills/bigquery.svg", alt: "BigQuery logo" },
  ];
  const authentication = [
    { lang: "Auth0", url: "/skills/oauth.svg", alt: "OAuth logo" },
    { lang: "NextAuth", url: "/skills/nextauth.png", alt: "Next Auth logo" },
    { lang: "Sendgrid", url: "/skills/sendgrid.png", alt: "Sendgrid logo" },
  ];
  const hosting = [
    { lang: "Azure", url: "/skills/azure.png", alt: "Azure logo" },
    { lang: "Vercel", url: "/skills/vercel.png", alt: "Vercel logo" },
    { lang: "Google Cloud", url: "/skills/google_cloud.svg", alt: "Netlify logo" }, // prettier-ignore
    { lang: "AWS", url: "/skills/aws.svg", alt: "Hostinger logo" },
  ];
  const pkgManagersBundlers = [
    { lang: "NPM", url: "/skills/npm.svg", alt: "NPM logo" },
    { lang: "Yarn", url: "/skills/yarn.svg", alt: "Yarn logo" },
    { lang: "Webpack", url: "/skills/webpack.png", alt: "Webpack logo" },
    { lang: "Vite", url: "/skills/vite.svg", alt: "Vite logo" },
  ];
  const versionControl = [
    { lang: "Git", url: "/skills/git.svg", alt: "Git logo" },
    { lang: "Github", url: "/skills/github.svg", alt: "Github logo" },
    { lang: "Gitlab", url: "/skills/gitlab.svg", alt: "Gitlab logo" },
    { lang: "Git Bash", url: "/skills/gitbash.svg", alt: "Gitbash logo" },
  ];
  const cssFrames = [
    { lang: "SCSS", url: "/skills/scss.png", alt: "SCSS logo" },
    { lang: "Material UI", url: "/skills/mui.svg", alt: "Material UI logo" },
    { lang: "Tailwind", url: "/skills/tailwind.png", alt: "Tailwind logo" },
    { lang: "Vuetify", url: "/skills/vuetify.svg", alt: "Vuetify logo" },
  ];
  const backend = [
    { lang: "Node", url: "/skills/nodejs.svg", alt: "Node logo" },
    { lang: "Express", url: "/skills/express.png", alt: "Express logo" },
    { lang: "Python", url: "/skills/python.svg", alt: "Python logo" },
  ];
  const testing = [
    { lang: "Jest", url: "/skills/jest.svg", alt: "Jest logo" },
    { lang: "Cypress", url: "/skills/cy.png", alt: "Cypress logo" },
    { lang: "RTL", url: "/skills/rtl.svg", alt: "RTL logo" }, // prettier-ignore
  ];
  const stateManagement = [
    { lang: "Redux", url: "/skills/redux.png", alt: "Redux logo" },
    { lang: "Context API", url: "/skills/reactjs.svg", alt: "Context API Logo" }, // prettier-ignore
    { lang: "Pinia", url: "/skills/pinia.svg", alt: "Pinia logo" },
    { lang: "Vuex", url: "/skills/vuex.svg", alt: "Vuex logo" },
  ];
  // navID makes it so clicking the nav anchors will scroll you down to this section
  return (
    <SectionBlock>
      <NumberedHeader navID={"skills"} num="02." txt="Skills" />
      <Stack sx={styles.skillgroups}>
        <SkillGroup genre="Web Languages" data={core} />
        <SkillGroup genre="Frontend" data={frameworks} />
        <SkillGroup genre="Backend" data={backend} />
        <SkillGroup genre="CSS Frameworks" data={cssFrames} />
        <SkillGroup genre="Version Control" data={versionControl} />
        <SkillGroup genre="Testing" data={testing} />
        <SkillGroup genre="Hosting Services" data={hosting} />
        <SkillGroup genre="Relational Databases" data={relationalDatabases} />
        <SkillGroup genre="NoSQL Databases" data={noSqlDatabases} />
        <SkillGroup genre="State Management" data={stateManagement} />
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
