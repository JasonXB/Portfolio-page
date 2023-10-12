import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import { introBP, containerDims } from "../../styles/breakpoints";
import PublicIcon from "@mui/icons-material/Public";

export default function Intro() {
  return (
    <Box
      sx={{
        ["@media (min-width: 800px)"]: {
          display: "grid",
          gridTemplateColumns: "35.5rem auto",
          mt: 12,
          alignItems: "center",
        },
      }}
    >
      <Stack sx={{ ...containerDims, maxWidth: "35.5rem" }}>
        <Typography variant="p" color="primary" sx={styles.line1}>
          Hi, &nbsp;my &nbsp;name &nbsp;is
        </Typography>
        <Typography variant="h1" sx={(mui) => styles.line2(mui)}>
          Jason.
        </Typography>
        <Typography variant="h1" color="secondary" sx={styles.line3}>
          I build for the web.
        </Typography>
        <Typography variant="p" color="secondary" sx={styles.para}>
          I&apos;m a Fullstack Web Developer who specializes in building
          exceptional digital experiences using React, Vue, and Node Express.
        </Typography>
        {/* <Button variant="outlined" color="primary" sx={styles.blogButton}>
          Check out my blog!
        </Button> */}
      </Stack>

      <PublicIcon
        sx={(mui) => ({
          fontSize: "400px",
          color: mui.palette.primary.main,
          ml: 4,
          px: 4,
          display: "none",
          ["@media (min-width: 1000px)"]: { display: "block" },
        })}
      />
    </Box>
  );
}

const styles = {
  // container: {
  //   mt: "5rem",
  //   mb: "5rem",
  //   px: "2rem",
  //   [introBP.minWidth]: { px: 10, mt: "10rem", mb: "10rem" },
  // },
  // Hi my name is
  line1: {
    fontSize: "1rem",
    mb: "0.5rem",
  },
  // Jason XB
  line2: (mui) => ({
    color: mui.palette.header.main,
    mb: "0.5rem",
    [introBP.maxWidth]: { fontSize: "2.5rem" },
  }),
  // I build things for the web
  line3: {
    mb: "2rem",
    [introBP.maxWidth]: { fontSize: "2.5rem" },
  },
  para: { maxWidth: "500px", mb: "2rem" },
  blogButton: { width: "100%", maxWidth: "300px", fontSize: "1rem" },
};
