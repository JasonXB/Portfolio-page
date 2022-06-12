export const navbarBP = {
  mobile: { minWidth: "@media (min-width: 800px)" },
  desktop: { maxWidth: "@media (max-width: 799px)" },
};

export const introBP = {
  minWidth: "@media (min-width: 820px)",
  maxWidth: "@media (max-width: 820px)",
};

// CONTROLLING SPACE BETWEEN NUMBERED SECTIONS (location 2 of 2)
// 1. Use mt and mb here on breakpoints.js
// 2. Use pt in NumberedHeader.js' styles.container object

// At the moment we have...
// 160px gap b/t numbered sections on mobile
// 200px gap b/t numbered sections on desktop
export const containerDims = {
  px: "1rem",
  mt: 10,
  mb: 10,
  ["@media (min-width: 400px)"]: { px: "2rem" },
  [introBP.minWidth]: { mt: 15, mb: 15 },
};

// Determine when we switch layouts in the skills section
export const skillsBP = { twoColumns: "@media (min-width: 700px)" };

export const projectsBP = {
  layoutChange: "@media (min-width: 950px)",
};
