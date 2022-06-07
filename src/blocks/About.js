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
      <Container sx={{ ...mxn.flexRow, alignItems: "start" }}>
        <Stack sx={{ minWidth: "525px", mr: "3.125rem" }}>
          <Typography
            variant="p"
            color="secondary"
            sx={{ maxWidth: "550px", mb: 2 }}
          >
            {" "}
            My interest in coding started back in 2016 while completing
            my degree in Mechanical Engineering. Back then we used Python and
            C++ to program remote-controlled and autonomous robotic vehicles. This led me
            down the design rabbit hole.
          </Typography>
          <Typography variant="p" color="secondary" sx={{ maxWidth: "550px" }}>
            Over the years I learned how to create my own physical products, so
            naturally the next step was to go digital! After a year of
            self-teaching, building personal projects, and losing my mind fixing
            really obscure bugs, I'm finally ready to make the leap and go pro. Wish me luck! 😄
          </Typography>
        </Stack>
        {/* <img src="/images/me.jpg" alt="Photo of Jason XB" /> */}
      </Container>
    </Box>
  );
}
