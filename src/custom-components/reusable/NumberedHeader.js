import React from "react";
import { Typography, Box } from "@mui/material";
import { mxn } from "../../../styles/mixins";

export default function NumberedHeader(props) {
  const { num, txt, navID } = props;
  return (
    <Box id={navID} sx={styles.container}>
      <Typography variant="span" sx={{ fontSize: "1.25rem", mr: 1 }}>
        {num}
      </Typography>
      <Typography
        variant="h2"
        sx={(mui) => ({ color: mui.palette.header.main })}
      >
        {txt}
      </Typography>
    </Box>
  );
}

const styles = {
  container: {
    ...mxn.flexRow,
    alignItems: "end",
    mb: "2.25rem",
    pt: 10, // CONTROLLING SPACE BETWEEN NUMBERED SECTIONS (location 1 of 2)
    "&::before": {
      display: "block",
      content: `" "`,
      marginTop: "-285px",
      height: "285px",
      visibility: "hidden",
      pointerEvents: "none",
    },
  },
};
