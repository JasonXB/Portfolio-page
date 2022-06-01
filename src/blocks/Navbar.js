import React from "react";
import Navbar_mobile from "../sub-blocks/Navbar_mobile";
import Navbar_desktop from "../sub-blocks/Navbar_desktop";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <Box>
      <Navbar_mobile />
      <Navbar_desktop />
    </Box>
  );
}
