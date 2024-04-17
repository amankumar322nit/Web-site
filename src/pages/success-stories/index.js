import React from "react";
import { Box as Wrapper } from "@chakra-ui/react";
import Hero from "@/components/success-stories/catalogue/hero/Hero";
import Card from "@/components/success-stories/catalogue/card/Card";
import Head from "next/head";

const successStories = () => {
  return (
    <>
      <Head>
        <title>Success Stories - AppBroda</title>
      </Head>
      <Wrapper>
        <Hero />
        <Card />
      </Wrapper>
    </>
  );
};

export default successStories;
