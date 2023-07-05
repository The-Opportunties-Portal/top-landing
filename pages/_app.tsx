import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script strategy="lazyOnload" id="gtm-script">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
      </Script>
      <Head>
        <title>The Opportunities Portal</title>
        <meta
          name="description"
          content="Promoting growth and innovation by directing talented individuals towards their desired opportunities present on their campus itself! Ensuring that no potential remains untapped."
        />
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <NextSeo
            title="The Opportunities Portal"
            titleTemplate="The Opportunities Portal"
            defaultTitle="The Opportunities Portal"
            description="Promoting growth and innovation by directing talented individuals towards their desired opportunities present on their campus itself! Ensuring that no potential remains untapped."
            canonical="https://www.theopportunitiesportal.com/"
            openGraph={{
              url: "https://www.theopportunitiesportal.com/",
              title: "The Opportunities Portal",
              description:
                "Promoting growth and innovation by directing talented individuals towards their desired opportunities present on their campus itself! Ensuring that no potential remains untapped.",
              images: [
                {
                  url: "https://www.theopportunitiesportal.com/images/logo.png",
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
          <ToastContainer />
        </ChakraProvider>
      </Provider>
    </>
  );
}
