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
  primary: { main: "#000000" }, //% black
  secondary: { main: "#43B7FF" }, //% blue
  info: { main: "#7BF0FF" }, //% teal
  wave: { main: "aqua" }, //% white
  unselected: { main: "#F5F5F5" }, // new
  selected: { main: "rgb(255,215,0)" }, // new
};
export const darkThemeColors = {
  primary: { main: "#FFFFFF" }, //% white
  secondary: { main: "#43B7FF" }, //% blue
  info: { main: "#7BF0FF" }, //% teal
  wave: { main: "#02285b" }, //% dark blue
  unselected: { main: "#F5F5F5" }, // new
  selected: { main: "rgb(255,215,0)" }, // new
};

const globalComponentChanges = {
  // Disable button ripple- which is controlled as a default prop
  MuiButtonBase: {
    defaultProps: { disableRipple: true },
  },
  // Remove Container's default padding
  MuiContainer: {
    defaultProps: { disableGutters: true },
  },
};

const typography = {
  // regular fontSize will stay at 14px
  // Use for the big title on the Homepage
  h1: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: "3.75rem", // 60px
    fontWeight: 300,
    lineHeight: 2.267,
    letterSpacing: "-0.01562em",
  },
  // Use for section headers on the homepage
  h2: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: "2.25rem", // 36px
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: "-0em",
    marginBottom: "1.875rem",
  },
  // Use for new webpage section headers
  h3: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: "1.875rem", // 30px
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: "-0em",
  },
  h4: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: "1.5rem", // 24px
    fontWeight: 400,
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  // Use for the homepage's expensive/cheap cards
  h5: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: "1.25rem", // 20px
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  // Use for descriptions underneath new section headers
  h6: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: "1.125rem", // 18px
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },
};

export const customThemes = {
  light: createTheme({
    components: globalComponentChanges,
    breakpoints: { values: breakpointValues },
    typography: typography, // change header font sizes
    palette: lightThemeColors,
  }), // STANDARD LIGHT THEME
  dark: createTheme({
    components: globalComponentChanges,
    breakpoints: { values: breakpointValues },
    typography: typography, // change header font sizes
    palette: darkThemeColors,
  }), // ALT DARK THEME
};
