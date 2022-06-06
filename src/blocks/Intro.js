import React from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
export default function Intro() {
  return (
    <Stack sx={(mui) => ({ background: mui.palette.bg.main })}>
      <Typography variant="p" color="primary">
        Hi my name is
      </Typography>
      <Typography variant="h1" color="secondary">
        Jason Bustamante.
      </Typography>
      <Typography variant="h1" sx={(mui) => ({ color: mui.palette.info.main })}>
        I build things for the web
      </Typography>
      <Typography variant="p">
        I'm an aspiring front-end web developer, specializing in building
        exceptional digital experiences
      </Typography>
      <Button variant="outlined" color="primary">
        Check out my blog!
      </Button>
    </Stack>
  );
}
