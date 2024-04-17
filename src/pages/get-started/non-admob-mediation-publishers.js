import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Hero from "@/components/non-admob-mediation-publishers/getStarted/hero/Hero";
import SuccessStories from "@/components/non-admob-mediation-publishers/getStarted/successStories/SuccessStories";
import Publisher from "@/components/non-admob-mediation-publishers/getStarted/publisher/Publisher";
import Opportunity from "@/components/non-admob-mediation-publishers/getStarted/opportunity/Opportunity";
import Benefit from "@/components/non-admob-mediation-publishers/getStarted/benefit/Benefit";
import Brands from "@/components/non-admob-mediation-publishers/getStarted/brands/Brands";
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
        <meta name="description" content="AppBroda helps app publishers manager their waterfall and optimize their eCPM within the most popular mobile ad mediations to increase their apps' revenue."/>
      </Head>
      <Box as="main">
        <Hero />
        <Brands />
        <Opportunity />
        <SuccessStories />
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
              src="https://forms.zohopublic.in/bharat4/form/GetStartedMediationPublishers/formperma/BbTDXTs2njBTvHHW_9xmn6yS-nBDfIYEtLQd8oDNRuk"
            ></iframe>
          </Box>
        )}
      </Box>
    </>
  );
};

export default GetStarted;
