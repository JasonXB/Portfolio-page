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
    // letterSpacing: "-0.01562em",
  },
  // 01 02 03 04 headers
  h2: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: "2rem", // 32px
    fontWeight: 600,
    lineHeight: 1.167,
    letterSpacing: "0.00935em",
  },
  // Sub headers for projects section (like Full-stack web apps)
  h3: {
    fontFamily: `'Orbitron', sans-serif;`,
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
    
    // use this trick to add ------dividers------ to headers
    // https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle#:~:text=Here%20is%20Flex%20based%20solution.
  },
 // Sub headers for skills section (like Full-stack web apps)
  h4: {
    fontFamily: `'Orbitron', sans-serif;`,
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  // Names of portfolio projects
  h5: {
    fontFamily: `'Fira Code', monospace`,
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
    color:"#ccd6f6"
  },
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
