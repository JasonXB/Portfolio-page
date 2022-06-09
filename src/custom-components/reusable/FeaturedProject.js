import React from "react";
import FeaturedProject_desktop from "../../sub-blocks/FeaturedProject_desktop";
import FeaturedProject_mobile from "../../sub-blocks/FeaturedProject_mobile";

export default function FeaturedProject(props) {
  const { odd, projectName, description, tools, githubLink, hostedLink } = props.dataObj; // prettier-ignore
  return (
    <>
      <FeaturedProject_desktop />
      <FeaturedProject_mobile />
    </>
  );
}
