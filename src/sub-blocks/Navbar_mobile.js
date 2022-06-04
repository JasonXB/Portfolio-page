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
          color="unselected"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          anchor={"top"}
          open={drawer}
          onClose={() => toggleDrawer()}
          modalProps={{ width: "500px" }}
        >
          <Stack sx={styles.menu}>
            <Box sx={styles.menuTopRow}>
              <Box sx={mxn.flexRow}>
                <TsunamiIcon fontSize="large" sx={styles.menuWaveIcon} />
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
                sx={{ ...styles.iconButton }}
                aria-label="escape"
                onClick={() => toggleDrawer()}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Divider />
            <Link href="#skills" underline="none" sx={styles.anchor}>
              SKILLS
            </Link>
            <Divider />
            <Link href="#projects" underline="none" sx={styles.anchor}>
              PROJECTS
            </Link>
            <Divider />
            <Link underline="none" sx={styles.anchor}>
              BLOG
            </Link>
            <Divider />
            <IconButton
              aria-label="theme toggle"
              sx={{ ...styles.anchor }}
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
  menuWaveIcon: {
    fontSize: "3.5rem",
    mr: 1,
    display: "none",
    ["@media (min-width: 400px)"]: { display: "block" },
  },
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
  anchor: { p: 3 },
  menu: {
    display: "grid",
    fontSize: "1.125rem",
  },
  menuTopRow: {
    ...mxn.flexRow,
    justifyContent: "space-between",
    p: 3,
  },
  iconButton: { justifySelf: "end" },
};
