import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../styles/custom-components/PaddedBlocks";
export default function PaddedWavyBlock(props) {
  const { px, py, mt, mb, bg } = props;
  // This will have 16px inline padding on mobile screens
  // On desktop screens, the main content will max out at 1200px (padding will still be there but not affect much)
  // The point of having a parent Box set to 100vw is so we can apply a background color across the entire viewport
  return (
    <>
      <Box
        sx={{
          ...(mui) => styles.outerBox(mui),
          ...waves,
          background: "#a2d9ff",
        }}
      >
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
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,128L60,112C120,96,240,64,360,80C480,96,600,160,720,181.3C840,203,960,181,1080,149.3C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,234.7C384,267,480,277,576,240C672,203,768,117,864,85.3C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

const waves = {
  display: "block",
  // background: "orange",
};
