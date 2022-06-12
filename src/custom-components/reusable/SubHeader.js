import React from "react";
import { Typography } from "@mui/material";

export default function SubHeader({ txt }) {
  const styles = {
    genre: { mb: "1rem", textAlign: "center" },
  };
  return (
    <Typography variant="h4" color="secondary" sx={styles.genre}>
      {txt}
    </Typography>
  );
}
