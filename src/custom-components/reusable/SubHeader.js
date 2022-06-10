import React from "react";
import { Typography, Box, Stack } from "@mui/material";

export default function SubHeader({ txt }) {
  const styles = {
    genre: { mb: "1rem", textAlign: "center" },
  };
  return (
    <Typography variant="h3" color="secondary" sx={styles.genre}>
      {txt}
    </Typography>
  );
}
