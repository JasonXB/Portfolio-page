import React from "react";
import { Box } from "@mui/material";
import { containerDims } from "../../../styles/breakpoints";

export default function SectionBlock(props) {
  return (
    <Box sx={{ ...containerDims, maxWidth: props.maxWidth || "none" }}>
      {props.children}
    </Box>
  );
}
