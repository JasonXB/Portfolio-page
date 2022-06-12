export const navbarBP = {
  mobile: { minWidth: "@media (min-width: 800px)" },
  desktop: { maxWidth: "@media (max-width: 799px)" },
};

export const introBP = {
  minWidth: "@media (min-width: 820px)",
  maxWidth: "@media (max-width: 820px)",
};

export const containerDims = {
  px: "1rem",
  mt: "6rem",
  mb: "6rem",
  ["@media (min-width: 400px)"]: { px: "2rem" },
  [introBP.minWidth]: { mt: "10rem", mb: "10rem" },
};

// Determine when we switch layouts in the skills section
export const skillsBP = { twoColumns: "@media (min-width: 700px)" };

export const projectsBP = {
  layoutChange: "@media (min-width: 950px)",
};
