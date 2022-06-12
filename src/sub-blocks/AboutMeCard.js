import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { mxn } from "../../styles/mixins";
//=
export default function AboutMeCard({ cardData }) {
  const styles = {
    circle: {
      ...mxn.flexColumn,
      borderRadius: "50%",
      height: "100px",
      width: "100px",
      border: "6px solid black",
      mt: "32px",
      background: `url(${cardData.img})`,
      backgroundSize: 'contain' 
    },
    multicolor: {
      background: "linear-gradient(180deg, #64ffda 20%, black 20%)",
      backgroundRepeat: "no-repeat",
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
  return (
    <Box sx={styles.multicolor}>
      <Box sx={styles.circle}></Box>
      <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
        {cardData.header}
      </Typography>

      <Box sx={styles.typographyBox}>
        <Typography variant="p" color="secondary" sx={styles.typ}>
          {cardData.miniHeader1}
        </Typography>
        <Typography variant="p" color="secondary" sx={styles.typ}>
          {cardData.answer1}
        </Typography>
      </Box>
      <Box sx={{ ...styles.typographyBox, pt: 0 }}>
        <Typography variant="p" color="secondary" sx={styles.typ}>
          {cardData.miniHeader2}
        </Typography>
        <Typography variant="p" color="secondary" sx={styles.typ}>
          {cardData.answer2}
        </Typography>
      </Box>
    </Box>
  );
}
