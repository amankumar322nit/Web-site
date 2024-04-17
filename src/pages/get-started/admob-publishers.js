import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Hero from "@/components/admobPub/getStarted/hero/Hero";
import Brands from "@/components/admobPub/getStarted/brands/Brands";
import Features from "@/components/admobPub/getStarted/features/Features";
import Alternative from "@/components/admobPub/getStarted/alternative/Alternative";
import Stats from "@/components/admobPub/getStarted/stats/Stats";
import Benefits from "@/components/admobPub/getStarted/benefits/Benefits";
import Head from "next/head";
import { extendedTheme } from "@/utils/chakra.utils";

const Admob_publishers = () => {
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <>
      <Head>
        <title>Get Started - AppBroda</title>
        <meta
          name="keywords"  
          content="Placement Optimisation,Waterfall Management,Automation tool,AB Test,Increased revenue,Higher eCPM,Data-driven strategies,Personalized recommendations,Floors,No additional SDK needed,Secure Dashboard to protect your data,ARPDAU improvement,Premium Ad demand,Hassle free integration,Product at Beta Stage,Dedicated Account manager,Free Product or 0% Rev share,AdMob"        
        />
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
        {/* <Stats /> */}
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
              src="https://forms.zohopublic.in/bharat4/form/GetStartedAdMobPublishers/formperma/2VMM-yJ4xTwA62lM3v4w77KMFR1IZzGdkFA4ehdoBvc"
            ></iframe>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Admob_publishers;
