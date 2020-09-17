import "../styles/globals.css";
import { StaticKitProvider } from "@statickit/react";

function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="de24cb33b4b7">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}

export default MyApp;
