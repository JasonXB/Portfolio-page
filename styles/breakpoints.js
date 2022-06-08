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
  [introBP.minWidth]: { mt: "10rem", mb: "10rem" },
};
