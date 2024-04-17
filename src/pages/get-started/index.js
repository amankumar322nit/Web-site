import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Hero from "@/components/home/getStarted/hero/Hero";
import Brands from "@/components/home/getStarted/brands/Brands";
import Features from "@/components/home/getStarted/features/Features";
import Alternative from "@/components/home/getStarted/alternative/Alternative";
import Stats from "@/components/home/getStarted/stats/Stats";
import Benefits from "@/components/home/getStarted/benefits/Benefits";
import Head from "next/head";
import { extendedTheme } from "@/utils/chakra.utils";

const Home = () => {
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <>
      <Head>
        <title>Get Started - AppBroda</title>
        <meta
          name="description"
          content="✅ Premium Demand✅ Higher Fill Rates✅ Higher eCPM✅ Higher Revenue!"
        />
      </Head>
      <Box as="main">
        <Hero />
        <Brands />
        <Features />
        <Alternative />
        <Stats />
        <Benefits />
        {isDesktopView && (
          <Box
            maxW="35%"
            w="100%"
            position="fixed"
            right="4%"
            top="80px"
            overflow="hidden"
            zIndex="0"
          >
            <iframe
              frameborder="0"
              style={{
                height: "calc(100vh - 100px)",
                maxWidth: "600px",
                width: "100%",
                scale: "1.08 1",
              }}
              src="https://forms.zohopublic.in/bharat4/form/GetStarted/formperma/r23pB8K7qdbxzC6mHIH7lycaM_yTkuRzc_TCHz7kYWM"
            ></iframe>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
