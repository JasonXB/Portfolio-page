import React from "react";
import { Typography, Box } from "@mui/material";
import { mxn } from "../../../styles/mixins";

export default function NumberedHeader(props) {
  const { num, txt } = props;
  return (
    <Box sx={{ ...mxn.flexRow, alignItems: "end", mb: "2.25rem" }}>
      <Typography variant="span" sx={{ fontSize: "1.25rem", mr: 1 }}>
        {num}
      </Typography>
      <Typography
        variant="h3"
        sx={(mui) => ({ color: mui.palette.header.main })}
      >
        {txt}
      </Typography>
    </Box>
  );
}
