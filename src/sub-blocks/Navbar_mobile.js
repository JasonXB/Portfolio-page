import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Box, Stack, Divider, Link } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThinLogo from "../custom-components/thinLogo";
import BoldLogo from "../custom-components/boldLogo";
import { mxn } from "../../styles/mixins";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import SliderAnchor from "../custom-components/reusable/SliderAnchor";
export default function ButtonAppBar() {
  // Control whether sliding menu is open or not using state
  const [drawer, setDrawer] = React.useState(true);
  const toggleDrawer = () => setDrawer(!drawer);

  
  return (
    <Box sx={styles.spaceBetween}>
      {/* color="bg" nav here */}
      <AppBar position="static" color="bg" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ ...styles.spaceBetween }}>
          <ThinLogo />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={(mui) => ({ color: mui.palette.primary.main })}
            onClick={() => toggleDrawer()}
          >
            <MenuIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
        </Toolbar>
        <Drawer
          anchor={"top"}
          open={drawer}
          onClose={() => toggleDrawer()}
          modalProps={{ width: "500px" }}
        >
          <Stack sx={(mui) => styles.sliderMenu(mui)}>
            <Box sx={{ ...mxn.flexRow, justifyContent: "space-between" }}>
              <ThinLogo />
              <IconButton
                aria-label="escape"
                onClick={() => toggleDrawer()}
                sx={(mui) => ({ color: 'white' })}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Divider sx={{ ...styles.divider }} />
            <SliderAnchor num="1" href="#about_me" txt="ABOUT ME" />
            <SliderAnchor num="2" href="#skills" txt="SKILLS" />
            <SliderAnchor num="3" href="#projects" txt="PROJECTS" />
            <SliderAnchor num="4" href="#blog" txt="BLOG" />
          </Stack>
        </Drawer>
      </AppBar>
    </Box>
  );
}

const styles = {
  nav: { boxShadow: "none" },
  appBar: {
    display: "flex",
    alignItems: "center",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
  },
  sliderMenu: (mui) => ({
    p: 2,
    pb: 0,
    background: mui.palette.cardBg.main,
  }),

  divider: {
    borderColor: "white",
    pt:2
  },
};
