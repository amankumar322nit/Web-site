import React from "react";
import { Box as Wrapper } from "@chakra-ui/react";
import Heading from "@/components/glossary/heading/Heading";
import Hero from "@/components/glossary/hero/Hero";
import Head from "next/head";

const glossary = () => {
  return (
    <>
      <Head>
        <title>Glossary - AppBroda</title>
        <meta
          name="description"
          content="Learn about app monetization and explore various terminologies from the advertising technology and mobile marketing industry with our comprehensive glossary."
        />
      </Head>
      <Wrapper>
        <Heading />
        <Hero />
      </Wrapper>
    </>
  );
};

export default glossary;
