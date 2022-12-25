import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import { fetcher } from "../utils/fetcher";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                color: "#FFFFFF",
                bg: "DarkerGrey",
                fontSize: ["sm", "md", "lg", "xl"],
                overscrollBehavior: "none",
            },
        },
    },
    colors: {
        white: "#FBFBFB",
        LightGrey: "#7a7a7a",
        MidGrey: "#282828",
        DarkGrey: "#161616",
        DarkerGrey: "#0f0f0f",
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
                fetcher,
                refreshInterval: 25 * 1000,
                // dedupingInterval: 120 * 1000,
                // errorRetryInterval: 120 * 1000,
                // focusThrottleInterval: 120 * 1000
            }}
        >
            <ChakraProvider theme={theme}>
                <Head>
                    <title>Alfie Ranstead</title>
                    <link rel="icon" href="/favicon.ico?v=2" />
                    <meta lang={"en-GB"} />
                </Head>
                <Component {...pageProps} />
            </ChakraProvider>
        </SWRConfig>
    );
}
