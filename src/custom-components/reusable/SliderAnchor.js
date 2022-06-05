import React from "react";
import { Typography, Link } from "@mui/material";
export default function SliderAnchor(props) {
  const { href, txt, num } = props;
  return (
    <Link href={href} underline="none" sx={styles.anchor}>
      <Typography variant="span" sx={{ mr: 2, color: "white" }}>
        {num}.
      </Typography>
      <Typography variant="p" sx={{ mr: 2, color: "white" }}>
        {txt}
      </Typography>
    </Link>
  );
}
const styles = {
  anchor: {
    p: 2,
    pl: 0,
  },
};
