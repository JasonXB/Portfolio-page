import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Stack, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThinLogo from "../custom-components/thinLogo";
import { mxn } from "../../styles/mixins";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import SliderAnchor from "../custom-components/reusable/SliderAnchor";
import { navbarBP } from "../../styles/breakpoints";
import ResumeButton from "../custom-components/ResumeButton";

export default function ButtonAppBar() {
  // Control whether sliding menu is open or not using state
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <Box
      sx={{
        ...styles.spaceBetween,
        [navbarBP.mobile.minWidth]: { display: "none" },
      }}
    >
      {/* color="bg" nav here */}
      <AppBar position="fixed" color="bg" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ ...styles.spaceBetween }}>
          <ThinLogo />
          {/* The burger icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={(mui) => ({ color: mui.palette.primary.main, p: 0 })}
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
              <ThinLogo color="white" />
              <IconButton
                aria-label="escape"
                onClick={() => toggleDrawer()}
                sx={{ color: "white" }}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Divider sx={{ ...styles.divider }} />
            {/*  prettier-ignore */}
            <SliderAnchor num="01" href="#about_me" txt="About me" toggleDrawer={toggleDrawer}/>
            {/*  prettier-ignore */}
            <SliderAnchor num="02" href="#skills" txt="Skills" toggleDrawer={toggleDrawer} />
            {/*  prettier-ignore */}
            <SliderAnchor num="03" href="#projects" txt="Projects" toggleDrawer={toggleDrawer} />
            {/*  prettier-ignore */}
            <SliderAnchor num="04" href="#contact" txt="Contact" toggleDrawer={toggleDrawer} />
            <ResumeButton customVariant="mobile" />
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
    pt: 2,
    mb: 2,
  },
};
