import React from "react";
import { Box as Wrapper } from "@chakra-ui/react";
import Hero from "@/components/blog/hero/Hero";
import BlogHeader from "@/components/blog/header/BlogHeader";
import Head from "next/head";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog - AppBroda</title>
        <meta
          name="description"
          content="Learn how we make app business easy for our publishers with tips from AppBroda growth experts on topics like app monetization, app user acquisition, and app ideation and more."
        />
      </Head>
      <Wrapper>
        <BlogHeader />
        <Hero />
      </Wrapper>
    </>
  );
};

export default blog;
