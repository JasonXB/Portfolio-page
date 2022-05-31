import "react";
import { Typography, Box, Stack } from "@mui/material";
import PaddedBlock from "../src/custom-components/general/PaddedBlock";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customThemes } from "../styles/themesMUI";
import { useGlobalContext } from "../state-management/global-context";
import Button from "@mui/material/Button";
import React from "react";

export default function Home() {
  // Use Context API's global state to decide which theme to use
  const { theme, setTheme } = useGlobalContext(); // from context file
  // On mount, check if the user has a preselected theme chosen
  React.useEffect(() => {
    const selectedTheme = localStorage.getItem("jasonxb_theme"); // "light", "dark", or falsy
    if (selectedTheme === "dark") setTheme("dark");
    else setTheme("light");
  }, []);

  return (
    <ThemeProvider theme={customThemes[theme]}>
      <CssBaseline>
        <PaddedBlock>
          <Typography variant="h2" color="primary">
            THEME TEXT
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setTheme("light")}
          >
            Light
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setTheme("dark")}
          >
            Dark
          </Button>
        </PaddedBlock>
      </CssBaseline>
    </ThemeProvider>
  );
}
