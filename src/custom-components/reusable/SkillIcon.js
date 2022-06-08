import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { mxn } from "../../../styles/mixins";

export default function SkillIcon({ skill, imgLink, alt, isPNG = false }) {
  return (
    <Stack sx={mxn.flexColumn}>
      <img
        src={imgLink}
        alt={alt}
        style={{ height: '45px', marginBottom: "0.75rem" }}
      />
      <Typography variant="p" sx={{ color: "#8892b0" }}>
        {skill}
      </Typography>
    </Stack>
  );
}
