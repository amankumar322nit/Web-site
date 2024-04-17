import GetInTouch from "@/components/contactUs/getInTouch/GetInTouch";
import GetStarted from "@/components/contactUs/getStarted/GetStarted";
import Intro from "@/components/contactUs/intro/Intro";
import SocialMedia from "@/components/contactUs/socialMedia/SocialMedia";
import { Box } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us - AppBroda</title>
        <meta
          name="description"
          content="AppBroda is more than an Adtech Platform. We are a go-to place for publishers. Setup a free demo to know more!"
        />
      </Head>
      <Box as="main">
        <Intro />
        <GetStarted />
        <GetInTouch />
        <SocialMedia />
      </Box>
    </>
  );
};

export default ContactUs;
