import React from "react";
import Box from "@mui/material/Box";

function Icon(props) {
  const { color } = props; // can use alt color using props
  return (
    <Box sx={{ width: "50px", height: "50px", userSelect: "none" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 45 45"
      >
        <path
          fillOpacity="0"
          stroke={color || "#64ffda"}
          strokeWidth="3"
          d="M0 -18.990431L16.446195 -9.495216 16.446195 9.495215 0 18.990431 -16.446195 9.495215 -16.446195 -9.495216 0 -18.990431z"
          transform="translate(22.5 22.5)"
        ></path>
        <text
          strokeWidth="0"
          dx="0"
          dy="0"
          fontFamily='"eGXbjCm6lnR1:::Roboto"'
          fontSize="2.1"
          fontWeight="400"
          transform="translate(24.386 24.19)"
        >
          <tspan y="0"> </tspan>
        </text>
        <text
          fill={color || "#64ffda"}
          strokeMiterlimit="1"
          strokeWidth="0"
          dx="0"
          dy="0"
          fontFamily='"eGXbjCm6lnR1:::Concert One"'
          fontSize="26"
          fontWeight="400"
          transform="translate(15.352 32.628)"
        >
          <tspan y="0">J</tspan>
        </text>
      </svg>
    </Box>
  );
}

export default Icon;
