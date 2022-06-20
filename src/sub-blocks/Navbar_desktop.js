import React from "react";
import ThinLogo from "../custom-components/thinLogo";
import { AppBar, Toolbar } from "@mui/material";
import NavAnchor from "../custom-components/reusable/NavAnchor";
import ResumeButton from "../custom-components/ResumeButton";
import { navbarBP } from "../../styles/breakpoints";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function Navbar_desktop() {
  const trigger = useScrollTrigger(); // T/F depending on scroll direction

  // Hide Appbar on scroll: https://mui.com/material-ui/react-app-bar/#hide-app-bar
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed" //@ required or else hide on scroll does nothing
        color="bg"
        sx={{
          // Same dimensions as padded block
          width: "100%",
          maxWidth: "1232px",
          // Center the fixed div
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          // Misc
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
    </Slide>
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
