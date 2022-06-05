import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TsunamiIcon from "@mui/icons-material/Tsunami";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import { navbarBP } from "../../styles/breakpoints";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../state-management/global-context";
import Divider from "@mui/material/Divider";
import { mxn } from "../../styles/mixins";

const ResponsiveAppBar = () => {
  // Control whether sliding menu is open or not using state
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  // Get current theme from Global Context
  const { theme, toggleTheme } = useGlobalContext();
  
  // Divider colors depend on the theme
  const dividerStyles = { borderColor: theme === "dark" ? "white" : "" }
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
      {/* //!!! elim */}
      <p></p>
      <Stack key={"top"}>
        <IconButton
          aria-label="menu"
          onClick={() => toggleDrawer()}
          sx={styles.iconButton}
          color="burger"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          anchor={"top"}
          open={drawer}
          onClose={() => toggleDrawer()}
          modalProps={{ width: "500px" }}
        >
          <Stack sx={(mui) => styles.menu(mui)}>
            <Box sx={styles.menuTopRow}>
              <Box sx={mxn.flexRow}>
                <TsunamiIcon
                  fontSize="large"
                  sx={(mui) => styles.menuWaveIcon(mui)}
                />
                <Stack>
                  <Typography component="p" sx={(mui) => styles.title(mui)}>
                    MONDO COOL
                  </Typography>
                  <Typography variant="p" sx={(mui) => styles.subtitle(mui)}>
                    Web design
                  </Typography>
                </Stack>
              </Box>
              <IconButton
                sx={(mui) => ({
                  ...styles.iconButton,
                  ...styles.thematicColor(mui),
                })}
                aria-label="escape"
                onClick={() => toggleDrawer()}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Divider sx={{ borderColor: theme === "dark" ? "white" : "" }} />

            <Link
              href="#skills"
              underline="none"
              sx={(mui) => styles.anchor(mui)}
            >
              SKILLS
            </Link>
            <Divider sx={{ borderColor: theme === "dark" ? "white" : "" }} />
            <Link
              href="#projects"
              underline="none"
              sx={(mui) => styles.anchor(mui)}
            >
              PROJECTS
            </Link>
            <Divider sx={{ borderColor: theme === "dark" ? "white" : "" }} />
            <Link underline="none" sx={(mui) => styles.anchor(mui)}>
              BLOG
            </Link>
            <Divider sx={{ borderColor: theme === "dark" ? "white" : "" }} />
            <IconButton
              aria-label="theme toggle"
              sx={(mui) => ({
                ...styles.anchor,
                ...styles.thematicColor(mui),
                p: 3,
              })}
              onClick={() => toggleTheme()}
            >
              <Brightness4Icon fontSize="large" />
              <Typography variant="p" sx={{ ml: 1, fontSize: "1.125rem" }}>
                {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
              </Typography>
            </IconButton>
          </Stack>
        </Drawer>
      </Stack>
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
    [`@media (min-width: ${navbarBP.mobileToDesktop})`]: { display: "none" },
  },
  waveIcon: (mui) => ({
    fontSize: "3.5rem",
    mr: 1,
    color: mui.palette.nav.contrastText,
    [navbarBP.mobile.maxWidth]: { fontSize: "2.5rem" },
  }),
  menuWaveIcon: (mui) => ({
    fontSize: "3.5rem",
    mr: 1,
    display: "none",
    color: mui.palette.nav.contrastText,
    ["@media (min-width: 400px)"]: { display: "block" },
  }),
  title: (mui) => ({
    fontFamily: navbarBP.font,
    fontSize: "1.5rem",
    color: mui.palette.nav.contrastText,
    [navbarBP.mobile.maxWidth]: { fontSize: "1.125rem" },
  }),
  subtitle: (mui) => ({
    fontFamily: navbarBP.font,
    fontSize: "1rem",
    color: mui.palette.nav.contrastText,
  }),
  anchor: (mui) => ({ p: 3, color: mui.palette.nav.contrastText }),
  menu: (mui) => ({
    display: "grid",
    fontSize: "1.125rem",
    backgroundColor: mui.palette.nav.menu,
  }),
  menuTopRow: {
    ...mxn.flexRow,
    justifyContent: "space-between",
    p: 3,
  },
  iconButton: { justifySelf: "end" },
  thematicColor: (mui) => ({ color: mui.palette.nav.contrastText }),
  
};
