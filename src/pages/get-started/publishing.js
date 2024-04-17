import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Hero from "@/components/app-marketer/getStarted/hero/Hero";
import Feature from "@/components/app-marketer/getStarted/feature/Feature";
import Offer from "@/components/app-marketer/getStarted/offer/Offer";
import SuccessStory from "@/components/app-marketer/getStarted/successStory/SuccessStory";
import GiganticTitle from "@/components/app-marketer/getStarted/giganticText/GiganticText";
import Philosophy from "@/components/app-marketer/getStarted/philosophy/Philosophy";
import Brands from "@/components/app-marketer/getStarted/brands/Brands";
import { extendedTheme } from "@/utils/chakra.utils";
import Head from "next/head";

const GetStarted = () => {
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <>
      <Head>
        <title>Get Started - AppBroda</title>
        <meta name="description" content="Get your Ad campaigns optimized and your ASO managed by user acquisition experts to achieve your desired results and drive positive ROI."/>
      </Head>
      <Box as="main">
        <Hero />
        <Brands />
        <Philosophy />
        <GiganticTitle />
        <Offer />
        <Feature />
        <SuccessStory />
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

export default GetStarted;
