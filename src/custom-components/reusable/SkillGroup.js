import React from "react";
import SkillIcon from "./SkillIcon";
import { Box, Typography } from "@mui/material";
import { mxn } from "../../../styles/mixins";

export default function SkillGroup({ genre, data }) {
  const styles = {
    container: { mb: "2rem" },
    genre: { mb: "1rem", ["@media (min-width: 650px)"]: { height: "3.75rem" } },
    languageRow: {
      display: "grid",
      gridTemplateColumns: `repeat(${data.length}, auto)`,
      gap: "1rem",
      justifyContent: "start",
      width: "auto",
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" color="secondary" sx={styles.genre}>
        {genre}
      </Typography>
      <Box sx={styles.languageRow}>
        {data.map((obj, i) => (
          <SkillIcon key={i} skill={obj.lang} imgLink={obj.url} alt={obj.alt} />
        ))}
      </Box>
    </Box>
  );
}
