import React from "react";
import { Typography, Box, Stack, Container } from "@mui/material";
import { mxn } from "../../styles/mixins";
import { containerDims } from "../../styles/breakpoints";

export default function About() {
  // maxWidth 700 on Brit
  return (
    <Box sx={containerDims}>
      <Box sx={{ ...mxn.flexRow, alignItems: "end", mb: "2.25rem" }}>
        <Typography variant="span" sx={{ fontSize: "1.25rem", mr: 1 }}>
          01.
        </Typography>
        <Typography
          variant="h3"
          sx={(mui) => ({ color: mui.palette.header.main })}
        >
          About Me
        </Typography>
      </Box>
      <Container
        sx={{
          ...mxn.flexRow,
          alignItems: "start",
          background: "rgba(2,12,27,0.82)",
        }}
      >
        <Stack sx={{ mr: "3.125rem" }}>
          <Typography>NAME:</Typography>
          <Typography>AGE:</Typography>
          <Typography>EMAIL:</Typography>
        </Stack>
        {/* <img src="/images/me.jpg" alt="Photo of Jason XB" /> */}
      </Container>
    </Box>
  );
}
