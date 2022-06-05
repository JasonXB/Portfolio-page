import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThinLogo from "../custom-components/thinLogo";
import BoldLogo from "../custom-components/boldLogo";
import { mxn } from "../../styles/mixins";

export default function ButtonAppBar() {
  return (
    <Box sx={styles.toolbar}>
      {/* color="bg" nav here */}
      <AppBar
        position="static"
        color="bg"
        sx={{ boxShadow: "none" }}
      >
        <Toolbar sx={styles.toolbar}>
          <ThinLogo />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={(mui) => ({ color: mui.palette.primary.main,  })}
          >
            <MenuIcon sx={{ fontSize: "2.5rem"}} />
          </IconButton>
        </Toolbar>
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
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
  },
};
