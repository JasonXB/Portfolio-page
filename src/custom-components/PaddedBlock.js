import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../styles/custom-components/PaddedBlocks";

function PaddedBlock(props) {
  const { px, py, mt, mb, bg } = props;
  // This will have 16px inline padding on mobile screens
  // On desktop screens, the main content will max out at 1200px (padding will still be there but not affect much)
  // The point of having a parent Box set to 100vw is so we can apply a background color across the entire viewport
  return (
    <Box sx={(mui) => styles.outerBox(mui)}>
      <Box
        id="responsive_container"
        // The other padded block component must have the exact same sx object that follows
        sx={{
          ...styles.innerBox,
          px: px || 2,
          py: py || 0,
          mt: mt || 0,
          mb: mb || 0,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default PaddedBlock;
