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
  mt: "5rem",
  mb: "5rem",
  ["@media (min-width: 400px)"]: { px: "2rem" },
  [introBP.minWidth]: { mt: "10rem", mb: "10rem" },
};

export const skillsBP = { twoColumns: "@media (min-width: 650px)" };

export const projectsBP = {
  layoutChange1 : "@media (min-width: 800px)",
  // layoutChange2: "@media (min-width: 1200px)",
}
