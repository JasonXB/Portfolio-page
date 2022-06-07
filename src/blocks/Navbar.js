import React from "react";
import Navbar_desktop from "../sub-blocks/Navbar_desktop";
import Navbar_mobile from "../sub-blocks/Navbar_mobile";
import { Box } from "@mui/material";
export default function Navbar() {
  return (
    <Box sx={{ pt: 2 }}>
      <Navbar_mobile />
      <Navbar_desktop />
    </Box>
  );
}
