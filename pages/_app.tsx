import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="The Opportunities Portal VIT"
        titleTemplate="The Opportunities Portal VIT"
        defaultTitle="The Opportunities Portal"
        description="Promoting growth and innovation by directing talented individuals towards their desired opportunities present on their campus itself! Ensuring that no potential remains untapped."
        canonical="https://www.theopportunitiesportal.com/"
        openGraph={{
          url: "https://www.theopportunitiesportal.com/",
          title: "The Opportunities Portal VIT",
          description:
            "Promoting growth and innovation by directing talented individuals towards their desired opportunities present on their campus itself! Ensuring that no potential remains untapped.",
          images: [
            {
              url: "/images/logo.png",
              width: 800,
              height: 420,
              alt: "The Opportunities Portal",
            },
          ],
          siteName: "The Opportunities Portal",
          type: "website",
          locale: "en_IE",
        }}
        twitter={{
          site: "https://www.theopportunitiesportal.com/",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
