import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TsunamiIcon from "@mui/icons-material/Tsunami";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import { navbar_mq } from "../../styles/breakpoints";
import { useGlobalContext } from "../../state-management/global-context";

const ResponsiveAppBar = () => {
  const { toggleTheme } = useGlobalContext();
  return (
    <Box component="nav" sx={styles.nav}>
      <TsunamiIcon fontSize="large" sx={{ fontSize: "5rem" }} />
      <Stack>
        <Typography component="p" sx={styles.title}>
          MONDO COOL
        </Typography>
        <Typography variant="p" sx={styles.subtitle}>
          Web design
        </Typography>
      </Stack>
      {/*//! consider fixing this by specifying grid lines instead of adding filler */}
      <p></p>
      <Link href="#skills" underline="none">
        SKILLS
      </Link>
      <Link href="#projects" underline="none">
        PROJECTS
      </Link>
      {/* //! Make a blog real quick */}
      <Link underline="none">BLOG</Link>
      <IconButton aria-label="theme toggle" onClick={() => toggleTheme()}>
        <Brightness4Icon fontSize="large" />
      </IconButton>
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
    gridTemplateColumns: "repeat(2, auto) 1fr repeat(5, auto)",
    alignItems: "center",
    gap: 3,
    [`@media (max-width: ${navbar_mq})`]: { display: "none" },
  },
  title: {
    fontFamily: `'Permanent Marker', cursive`,
    fontSize: "2rem",
  },
  subtitle: {
    fontFamily: `'Permanent Marker', cursive`,
    fontSize: "1.5rem",
  },
};
