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
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../state-management/global-context";
import Divider from "@mui/material/Divider";

const ResponsiveAppBar = () => {
  // Control whether sliding menu is open or not using state
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  // Get current theme from Global Context
  const { theme } = useGlobalContext();

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

      <Stack key={"right"}>
        <IconButton
          aria-label="menu"
          onClick={() => toggleDrawer()}
          sx={styles.iconButton}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={drawer}
          onClose={() => toggleDrawer()}
          modalProps={{ width: "500px" }}
        >
          <Stack sx={styles.menu}>
            <IconButton
              sx={{ ...styles.iconButton, p: 2 }}
              aria-label="escape"
              onClick={() => toggleDrawer()}
            >
              <CloseIcon fontSize="large" sx={{ mb: 4 }} />
            </IconButton>
            <Link href="#skills" underline="none" sx={styles.anchor}>
              SKILLS
            </Link>
            <Link href="#projects" underline="none" sx={styles.anchor}>
              PROJECTS
            </Link>
            <Link underline="none" sx={styles.anchor}>
              BLOG
            </Link>
            <Divider sx={{ mb: 3 }} />
            <IconButton
              aria-label="delete"
              sx={{ ...styles.iconButton, ...styles.anchor }}
            >
              <Typography variant="p" sx={{ mr: 1, fontSize: "1.125rem" }}>
                {theme === "light" ? "DARK" : "LIGHT"}
              </Typography>
              <Brightness4Icon fontSize="large" />
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
  anchor: {
    px: 3,
    pb: 3,
    textAlign: "right",
    ml: 4,
  },
  menu: {
    display: "grid",
    fontSize: "1.125rem",
  },
  iconButton: {
    justifySelf: "end",
  },
};
