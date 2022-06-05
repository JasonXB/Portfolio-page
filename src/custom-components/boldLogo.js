import React from "react";
import Box from "@mui/material/Box";

function Icon() {
  return (
    <Box sx={{ width: "50px", height:"50px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="40"
        // height="50"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        version="1.1"
        viewBox="0 0 36.892 42.6"
      >
        <path
          fillOpacity="0"
          stroke="#64ffda"
          strokeWidth="4"
          d="M16.446195 9.495215L0 18.990431 -16.446195 9.495215 -16.446195 -9.495216 0 -18.990431 16.446195 -9.495216z"
          transform="translate(18.446 21.3)"
        ></path>
        <text
          x="20.333"
          y="22.989"
          strokeWidth="0"
          dx="0"
          dy="0"
          fontFamily="'ef63KGAbkOd1:::Roboto'"
          fontSize="2.1"
          fontWeight="700"
        ></text>
        <text
          x="10.749"
          y="32.198"
          fill="#64ffda"
          strokeMiterlimit="5"
          strokeWidth="9"
          dx="0"
          dy="0"
          fontFamily="'ef63KGAbkOd1:::Concert One'"
          fontSize="28"
          fontWeight="700"
        >
          <tspan y="32.198" strokeWidth="9" fontWeight="700">
            J
          </tspan>
        </text>
      </svg>
    </Box>
  );
}

export default Icon;
