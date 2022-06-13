import React from "react";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import { Stack, Box, Typography } from "@mui/material";
import { projectsBP } from "../../styles/breakpoints";
import FeaturedProject_mobile from "../sub-blocks/FeaturedProject_mobile";
import FeaturedProject_desktop from "../sub-blocks/FeaturedProject_desktop";
import { monstercat, smashBros, localEats } from "../projectData";

export default function Projects() {
  return (
    <SectionBlock>
      <NumberedHeader navID={"projects"} num="03." txt="Projects" />
      {/* For Mobile screens */}
      <Stack sx={{ [projectsBP.layoutChange]: { display: "none" } }}>
        <Typography variant="h3" color="secondary" sx={mobileStyles.subheader}>
          &nbsp;&nbsp;Full Stack&nbsp;&nbsp;
        </Typography>
        <Box sx={{ [projectsBP.layoutChange]: { mb: "4rem" } }}>
          <FeaturedProject_mobile dataObj={localEats} mb="4rem" />
        </Box>
        <Typography variant="h3" color="secondary" sx={mobileStyles.subheader}>
          &nbsp;&nbsp;Landing Pages&nbsp;&nbsp;
        </Typography>
        <Box>
          <FeaturedProject_mobile dataObj={smashBros} mb="2rem" />
          <FeaturedProject_mobile dataObj={monstercat} mb="4rem" />
        </Box>
      </Stack>
      {/* For Desktop screens */}
      <Stack sx={desktopStyles.containers}>
        <Typography variant="h3" color="secondary" sx={mobileStyles.subheader}>
          &nbsp;&nbsp;Full Stack Web Apps&nbsp;&nbsp;
        </Typography>
        <FeaturedProject_desktop dataObj={localEats} mb="4rem" />
        <Typography
          variant="h3"
          color="secondary"
          sx={{ ...mobileStyles.subheader, mt: "3rem" }}
        >
          &nbsp;&nbsp;Landing Pages&nbsp;
        </Typography>
        <FeaturedProject_desktop dataObj={smashBros} mb="2rem" />
        <FeaturedProject_desktop dataObj={monstercat} mb="4rem" />
      </Stack>
    </SectionBlock>
  );
}

const mobileStyles = {
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

const desktopStyles = {
  containers: {
    display: "none",
    [projectsBP.layoutChange]: {
      display: "block",
    },
  },
};
