import "../styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customThemes } from "../styles/themesMUI";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customThemes["light"]}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default MyApp;
