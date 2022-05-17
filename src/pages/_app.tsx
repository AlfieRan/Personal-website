import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import { fetcher } from "../utils/fetcher";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "#FFFFFF",
        bg: "DarkGrey",
        "overscroll-behavior-y": "none",
        fontSize: ["sm", "md", "lg", "xl"],
      },
    },
  },
  colors: {
    white: "#FBFBFB",
    LightGrey: "#7a7a7a",
    MidGrey: "#282828",
    DarkGrey: "#161616",
    DarkBlue: "#1B263B",
    MidBlue: "#285883",
    LightBlue: "#3993DD",
    LightGreen: "#09BC8A",
    DarkGreen: "#2e602b",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher(url) {
          return fetcher("GET", url).then((res) => res.data);
        },
        refreshInterval: 5 * 1000,
        // dedupingInterval: 120 * 1000,
        // errorRetryInterval: 120 * 1000,
        // focusThrottleInterval: 120 * 1000
      }}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}
