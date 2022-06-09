import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";

export default function Projects() {
  const localEats = {
    odd: false,
    level: "Full stack",
    projectName: "Local Eats",
    description:
      "A web app that lets users search for restaurants near them and anywhere across Canada or the United States. Features include filtered local business searches, credentials-based signup and login, bookmarks, geolocation, and integration with google maps",
    tools: ["Next.js", "React.js", "Javascript", "Node", "Yarn", "NextAuth", "Sendgrid", 'HTML & CSS'], // prettier-ignore
    githubLink: "https://github.com/JasonxPortfolio/local-eats",
    hostedLink: "https://localeats.vercel.app/",
  };
  const smashBros = {
    odd: true,
    level: "Front-end",
    projectName: "Smash-Bros Sales Page",
    description:
      "A fully responsive landing page for the Nintendo Switch's highest selling game. Inspired by the design of their actual sales page that's currently live",
    tools: ["HTML & CSS", "Javascript", "NPM", "Parcel"],
    githubLink: "https://github.com/JasonxPortfolio/Smash_bros_page",
    hostedLink: "https://smashbrosultimate.vercel.app/",
  };
  const monstercat = {
    odd: false,
    level: "Front-end",
    projectName: "Monstercat Landing Page",
    description:
      "A responsive replica of the Monstercat Music site. This is one of the first landing pages I built once I finished learning CSS- and my code structuring's improved quite a bit since then",
    tools: ["HTML & CSS"],
    githubLink: "https://github.com/Jason2B3/Monstercat",
    hostedLink: "https://monstercat.netlify.app/",
  };
  return (
    <SectionBlock>
      <NumberedHeader num="03." txt="Projects" />
    </SectionBlock>
  );
}
