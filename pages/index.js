import React from "react";
import PaddedBlock from "../src/custom-components/PaddedBlock";
import PaddedWavyBlock from "../src/custom-components/PaddedThemeBlock";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customThemes } from "../styles/themesMUI";
import { useGlobalContext } from "../state-management/global-context";
import Navbar from "../src/blocks/Navbar";

export default function Home() {
  // Use Context API's global state to decide which theme to use
  const { theme, setTheme } = useGlobalContext(); // from context file
  // On mount, check if the user has a preselected theme chosen
  React.useEffect(() => {
    const selectedTheme = localStorage.getItem("jasonxb_theme"); // "light", "dark", or falsy
    if (selectedTheme === "dark") setTheme("dark");
    else if (selectedTheme === "light") setTheme("light");
  }, []);

  return (
    <ThemeProvider theme={customThemes[theme]}>
      <CssBaseline>
        <PaddedWavyBlock>
          <Navbar />
        </PaddedWavyBlock>
      </CssBaseline>
    </ThemeProvider>
  );
}
