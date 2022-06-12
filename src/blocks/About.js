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
        <Box sx={styles.multicolor}>
          <Box sx={styles.circle}></Box>
          <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
            Education
          </Typography>

          <Box sx={styles.typographyBox}>
            <Typography variant="p" color="secondary" sx={styles.typ}>
              Degree
            </Typography>
            <Typography variant="p" color="secondary" sx={styles.typ}>
              Mechanical Engineering
            </Typography>
          </Box>
          <Box sx={{ ...styles.typographyBox, pt: 0 }}>
            <Typography variant="p" color="secondary" sx={styles.typ}>
              University
            </Typography>
            <Typography variant="p" color="secondary" sx={styles.typ}>
              UOIT
            </Typography>
          </Box>
        </Box>
      </Stack>
    </SectionBlock>
  );
}
const styles = {
  circle: {
    ...mxn.flexColumn,
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    border: "6px solid black",
    mt: "32px",
    background: 'url("/images/uoit.jpg")',
  },
  multicolor: {
    background: "linear-gradient(180deg, #64ffda 20%, black 20%)",
    // height: "20rem",
    width: "17.625rem",
    ...mxn.flexColumn,
    borderRadius: 5,
  },
  typographyBox: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    p: 2,
  },
  typ: { fontSize: "1rem", textAlign: "center" },
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
