import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";

export default function Projects() {
  const localEats = {
    odd: false,
    projectName: "Local Eats",
    description:
      "An operational full stack web application that's geared towards helping users search for local restaurants across Canada or the United States. Features include filtered local business searching, credentials-based signup and login, bookmarks, geolocation, and integration with google maps",
    tools: ["Next.js / React.js", "Javascript", "Yarn", "NextAuth", "Sendgrid", 'HTML & CSS'], // prettier-ignore
    // githubLink:'',
    hostedLink: "https://smashbrosultimate.vercel.app/",
  };
  const smashBros = {
    odd: true,
    projectName: "Super Smash Bros Sales Page",
    description:
      "A fully responsive landing page for the Nintendo Switch's highest selling game. Inspired by the design of their actual sales page that's currently live",
    tools: ["HTML & CSS", "Javascript", "NPM", "Parcel"],
    // githubLink:'',
    hostedLink: "https://smashbrosultimate.vercel.app/",
  };
  const monstercat = {
    odd: true,
    projectName: "Monstercat Landing Page",
    description:
      "A responsive replica of the Monstercat Music site. This is one of the first landing pages I built once I finished learning CSS- and my code structuring's improved quite a bit since then",
    tools: ["HTML & CSS"],
    // githubLink:'',
    // hostedLink: "https://smashbrosultimate.vercel.app/",
  };
  return (
    <SectionBlock>
      <NumberedHeader num="03." txt="Projects" />
    </SectionBlock>
  );
}
