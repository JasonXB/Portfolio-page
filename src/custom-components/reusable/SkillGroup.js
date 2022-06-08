import React from "react";
import SkillIcon from "./SkillIcon";
import { Box , Typography} from "@mui/material";
import { mxn } from "../../../styles/mixins";

export default function SkillGroup({ genre, dataObj }) {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" color="secondary" sx={styles.genre}>
        {genre}
      </Typography>
      <Box sx={styles.languageRow}>
        {dataObj.map((obj, i) => (
          <SkillIcon key={i} skill={obj.lang} imgLink={obj.url} alt={obj.alt} />
        ))}
      </Box>
    </Box>
  );
}

const styles = {
  container: { mb: "2rem" },
  genre: { mb: "1rem" },
  languageRow: {
    ...mxn.flexRow,
    justifyContent: "space-between",
    alignItems: "end",
  },
};
