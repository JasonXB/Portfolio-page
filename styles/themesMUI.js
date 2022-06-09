import { createTheme } from "@mui/material/styles";

// We may need to reference the following 3 objects across our project
export const breakpointValues = {
  xs: 0,
  sm: 700,
  md: 1000,
  lg: 1232,
  xl: 1636,
};
export const lightThemeColors = {
  primary: { main: "#64ffda" }, // vim green
  secondary: { main: "#8892b0" }, // darker silver
  header: { main: "#ccd6f6" }, // bright silver
  bg: { main: "#0a192f" }, // dark background color
  cardBg: { main: "rgba(2,12,27,0.90)" }, // same color as above but with opacity 0.7
};

const globalComponentChanges = {
  // Disable button ripple- which is controlled as a default prop
  MuiButtonBase: { defaultProps: { disableRipple: true } },
  // Remove Container's default padding
  MuiContainer: { defaultProps: { disableGutters: true } },
  // MuiAppBar : {},
};

const typography = {
  // hi my name is Jason XB. I build things for the web
  h1: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: "3.75rem", // 60px
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.01562em",
  },

  h2: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: "2.25rem", // 36px
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: "-0em",
    marginBottom: "1.875rem",
  },
  // 01 02 03 04 headers
  h3: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.167,
    // letterSpacing: "-0em",
  },
  h4: {
    fontFamily: `'Orbitron', sans-serif;`,
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  // Use for the homepage's expensive/cheap cards
  h5: {
    fontFamily: `'Fira Code', monospace`,
    fontSize: "1.25rem", // 20px
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  // Use for descriptions underneath new section headers
  h6: {
    fontFamily: `'Fira Code', monospace`,
    fontSize: "1.125rem", // 18px
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },
  p: {
    fontSize: "1.25rem",
    fontFamily: `'Roboto', sans-serif`,
  },
  span: {
    fontFamily: `'Fira Code', monospace`,
    color: "#64ffda",
  },
};

export const customThemes = {
  light: createTheme({
    components: globalComponentChanges,
    breakpoints: { values: breakpointValues },
    typography: typography, // change header font sizes
    palette: lightThemeColors,
  }), // STANDARD LIGHT THEME
};
