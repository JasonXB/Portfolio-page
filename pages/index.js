import React from "react";
import { Typography } from "@mui/material";
import PaddedBlock from "../src/custom-components/PaddedBlock";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customThemes } from "../styles/themesMUI";
import { useGlobalContext } from "../state-management/global-context";
import Navbar from "../src/blocks/Navbar";
import ThemeSwitch from "../src/custom-components/ThemeSwitch";

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
          <Navbar />
        </PaddedBlock>
      </CssBaseline>
    </ThemeProvider>
  );
}
