import React from "react";
import { Box as Wrapper } from "@chakra-ui/react";
import Hero from "@/components/guides/hero/Hero";
import Head from "next/head";

const guides = () => {
  return (
    <>
      <Head>
        <title>Guides - AppBroda</title>
        <meta
          name="description"
          content="This detailed guide on eCPM for app publishers that can help maximize ad revenue &amp; analyze app monetization strategies better."
        />
      </Head>
      <Wrapper>
        <Hero />
      </Wrapper>
    </>
  );
};

export default guides;
