import React from "react";
import { Typography, Box, Stack, Container } from "@mui/material";
import { mxn } from "../../styles/mixins";
import SectionBlock from "../custom-components/reusable/SectionBlock";
import NumberedHeader from "../custom-components/reusable/NumberedHeader";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

//=
export default function About() {
  return (
    <SectionBlock>
      <NumberedHeader num="01." txt="About Me" />
      <Stack>
        <Box
          sx={{
            background: "linear-gradient(180deg, #64ffda 20%, black 20%)",
            height: "25rem",
            width: "15.625rem",
            ...mxn.flexColumn,
            borderRadius: 5,
          }}
        >
          <Box sx={styles.circle}>
            <SchoolIcon fontSize="large" sx={{ mt: "32px" }} />
          </Box>
          <Typography variant="p">Education</Typography>
        </Box>
      </Stack>
    </SectionBlock>
  );
}
const styles = {
  circle: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    border: "2px solid white",
    background: "white",
    mt: "32px",
    ...mxn.flexColumn,
  },
};
/*
<Typography variant="p" color="secondary">
              NAME: Jason Bustamante
            </Typography>
            <Typography variant="p" color="secondary">
              AGE: 25
            </Typography>
            <Typography variant="p" color="secondary">
              DEGREE: Mechanical Engineering
            </Typography>
            <Typography variant="p" color="secondary">
              GRADUATED FROM: University of Ontario Institute of Technology
            </Typography>
            <Typography variant="p" color="secondary">
              LOCATION: Ontario, Canada (willing to relocate)
            </Typography>
            <Typography variant="p" color="secondary">
              EMAIL: jasonxb96@gmail.com
            </Typography>
*/
