import "../styles/globals.css";
import GlobalContextProvider from "../state-management/global-context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
