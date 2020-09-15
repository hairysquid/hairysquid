import "../styles/globals.css";
import { StaticKitProvider } from "@statickit/react";

function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="39a836dc9c7f">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}

export default MyApp;
