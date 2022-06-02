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
        sx={(mui) => ({
          ...styles.outerBox(mui),
          display: "block",
          background: mui.palette.bg.main,
        })}
      >
        <Box
          id="responsive_container"
          sx={(mui) => ({
            ...styles.innerBox(mui),
            px: px || 2,
            py: py || 0,
            mt: mt || 0,
            mb: mb || 0,
          })}
        >
          {props.children}
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#02285b"
          fill-opacity="1"
          d="M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,245.3C840,256,960,224,1080,186.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

