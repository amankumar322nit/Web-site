import Intro from "@/components/aboutUs/intro/Intro";
import Mission from "@/components/aboutUs/mission/Mission";
import Perks from "@/components/aboutUs/perks/Perks";
import Values from "@/components/aboutUs/values/Values";
import WorkWithUs from "@/components/aboutUs/workWithUs/WorkWIthUs";
import Founders from "@/components/aboutUs/founder/Founders";
import { Box } from "@chakra-ui/react";
import React from "react";
import Head from 'next/head';


const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - AppBroda</title>
        <meta name="description" content="AppBroda is a SAAS company with a vision to become a one stop solution for an app publisher that fuels their entire mobile App’s Growth."/>
      </Head>
      <Box as="main">
        <Intro />
        <Founders/>
        <Mission />
        <Values />
        <Perks />
      <WorkWithUs />
      </Box>
      </>
  );
};

export default AboutUs;
