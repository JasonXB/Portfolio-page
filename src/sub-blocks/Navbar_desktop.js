import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TsunamiIcon from "@mui/icons-material/Tsunami";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import { navbarBP } from "../../styles/breakpoints";
import { useGlobalContext } from "../../state-management/global-context";
import { mxn } from "../../styles/mixins";

const ResponsiveAppBar = () => {
  const { toggleTheme } = useGlobalContext();
  return (
    <Box component="nav" sx={styles.nav}>
      <Box sx={mxn.flexRow}>
        <TsunamiIcon fontSize="large" sx={(mui) => styles.waveIcon(mui)} />
        <Stack>
          <Typography component="p" sx={(mui) => styles.title(mui)}>
            MONDO COOL
          </Typography>
          <Typography variant="p" sx={(mui) => styles.subtitle(mui)}>
            Web design
          </Typography>
        </Stack>
      </Box>
      {/*//! consider fixing this by specifying grid lines instead of adding filler */}
      <p></p>
      <p></p>
      <Link href="#skills" underline="none" sx={(mui) => styles.subtitle(mui)}>
        SKILLS
      </Link>
      <Link
        href="#projects"
        underline="none"
        sx={(mui) => styles.subtitle(mui)}
      >
        PROJECTS
      </Link>
      {/* //! Make a blog real quick */}
      <Link underline="none" sx={(mui) => styles.subtitle(mui)}>
        BLOG
      </Link>
      <IconButton
        aria-label="theme toggle"
        onClick={() => toggleTheme()}
        sx={(mui) => styles.subtitle(mui)}
      >
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
    gap: 4,
    [`@media (max-width: ${navbarBP.mobileToDesktop})`]: { display: "none" },
  },
  waveIcon: (mui) => ({
    color: mui.palette.nav.contrastText,
    fontSize: "3.5rem",
    mr: 1,
    [navbarBP.desktop.minWidth]: { fontSize: "5rem" },
  }),
  title: (mui) => ({
    fontFamily: `'Orbitron', sans-serif`, //
    color: mui.palette.nav.contrastText,
    fontSize: "1.5rem",
    [navbarBP.desktop.minWidth]: { fontSize: "2rem" },
  }),
  subtitle: (mui) => ({
    fontFamily: `'Orbitron', sans-serif`,
    color: mui.palette.nav.contrastText,
    fontSize: "1rem",
    [navbarBP.desktop.minWidth]: { fontSize: "1.5rem" },
  }),
};
