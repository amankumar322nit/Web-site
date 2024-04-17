import React from "react";
import { Box as Wrapper } from "@chakra-ui/react";
import Hero from "@/components/thank-you/Hero/hero"
import Head from "next/head";

const thankyou = () => {
    return (<> <Head>
        <title>Thank you for your interest in AppBroda!</title>
        <meta name="description" content="Thank you for your interest in AppBroda! Our team will get in touch with you shortly!"/>
        </Head>
        <Wrapper>
      <Hero/>
        </Wrapper>
        </>
  )
}

export default thankyou