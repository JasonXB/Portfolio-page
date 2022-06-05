import React from "react";
import { Typography, Link } from "@mui/material";

export default function NavAnchor(props) {
  const { href, txt, num } = props;

  return (
    <Link href={href} underline="none" sx={styles.anchor}>
      <Typography variant="span" sx={(mui) => styles.numSpan(mui)}>
        {num}.
      </Typography>
      <Typography variant="p" sx={(mui) => styles.txtSpan(mui)}>
        {txt}
      </Typography>
    </Link>
  );
}
const styles = {
  numSpan: (mui) => ({ color: mui.palette.primary.main, mr: 1 }),
  txtSpan: (mui) => ({ color: mui.palette.info.main }),
  // Colors link text on hover
  anchor: (mui) => ({
    "&:hover": { "*": { color: mui.palette.primary.main } },
  }),
};
