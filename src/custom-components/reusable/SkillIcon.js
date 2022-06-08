import React from "react";
import { Typography, Box, Stack } from "@mui/material";
export default function SkillIcon({ skill, imgLink, alt }) {
  return (
    <Stack>
      <img src={imgLink} alt={alt} style={{ width: "50px" }} />
      <Typography variant="p">{skill}</Typography>
    </Stack>
  );
}
