import { Box as Wrapper } from "@chakra-ui/react";
import Hero from "@/components/home/hero/Hero";
import BuildFor from "@/components/home/features/BuildFor";
import Stats from "@/components/home/stats/Stats";
import BlogList from "@/components/home/blogs/BlogList";
import Call from "@/components/home/call/Call";
import Brands from "@/components/home/brands/Brands";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AppBroda: Mobile App Growth & Advertising Platform</title>
        <meta
          name="description"
          content="AppBroda is a Mobile App Growth &amp; Advertising Platform helping publisher with all their App Business operations like app monetization, user acquisition &amp; ASO."
        />
      </Head>
      <Wrapper>
        <Hero />
        <Brands />
        <BuildFor />
        <Stats />
        <BlogList />
        <Call />
      </Wrapper>
    </>
  );
}
