import { useState, createContext, useContext } from "react"; // import useContext
const AAA = createContext();
export const useGlobalContext = () => useContext(AAA); // export custom hook

export default function GlobalContextProvider(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };
  const distribution = { theme, setTheme, toggleTheme };
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}
