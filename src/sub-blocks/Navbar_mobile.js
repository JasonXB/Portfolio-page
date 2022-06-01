import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TsunamiIcon from "@mui/icons-material/Tsunami";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import { navbar_mq } from "../../styles/breakpoints";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@mui/material/Drawer';

const ResponsiveAppBar = () => {
  return (
    <Box component="nav" sx={styles.nav}>
      <TsunamiIcon fontSize="large" sx={styles.icon} />
      <Stack>
        <Typography component="p" sx={styles.title}>
          MONDO COOL
        </Typography>
        <Typography variant="p" sx={styles.subtitle}>
          Web design
        </Typography>
      </Stack>
      <IconButton aria-label="delete">
        <MenuIcon fontSize="large" />
      </IconButton>
      {/* <p></p>
      <Link href="#skills" underline="none">
        SKILLS
      </Link>
      <Link href="#projects" underline="none">
        PROJECTS
      </Link>
      <Link underline="none">BLOG</Link> */}
      {/* <IconButton aria-label="delete">
        <Brightness4Icon fontSize="large" />
      </IconButton> */}
    </Box>
  );
};
export default ResponsiveAppBar;

const styles = {
  nav: {
    width: "100%",
    display: "grid",
    fontSize: "1.125rem",
    py: 1.25,
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: 1,
    [`@media (min-width: ${navbar_mq})`]: { display: "none" },
  },
  icon: {
    fontSize: "3.5rem",
    ["@media (max-width: 330px)"]: { fontSize: "2.5rem" },
  },
  title: {
    fontFamily: `'Permanent Marker', cursive`,
    fontSize: "1.5rem",
    ["@media (max-width: 330px)"]: { fontSize: "1.25rem" },
  },
  subtitle: {
    fontFamily: `'Permanent Marker', cursive`,
    fontSize: "1rem",
  },
};
