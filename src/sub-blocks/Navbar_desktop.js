import React from "react";
import ThinLogo from "../custom-components/thinLogo";
import { AppBar, Toolbar } from "@mui/material";
import NavAnchor from "../custom-components/reusable/NavAnchor";
import ResumeButton from "../custom-components/ResumeButton";
import { navbarBP } from "../../styles/breakpoints";
export default function Navbar_desktop() {
  return (
    <AppBar
      position="static"
      color="bg"
      sx={{
        boxShadow: "none",
        [navbarBP.desktop.maxWidth]: { display: "none" },
      }}
    >
      <Toolbar sx={{ ...styles.spaceBetween }}>
        <ThinLogo />
        <p></p>
        <NavAnchor num="01" href="#about_me" txt="About" />
        <NavAnchor num="02" href="#skills" txt="Skills" />
        <NavAnchor num="03" href="#projects" txt="Projects" />
        <NavAnchor num="04" href="#contact" txt="Contact" />
        <ResumeButton />
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  nav: { boxShadow: "none" },
  appBar: {
    display: "flex",
    alignItems: "center",
  },
  spaceBetween: {
    display: "grid",
    gridTemplateColumns: "auto 1fr repeat(5,auto)",
    gap: 4,
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
  },
};
