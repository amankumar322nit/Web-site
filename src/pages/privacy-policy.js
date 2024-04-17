import React from 'react'
import {Box as Wrapper} from '@chakra-ui/react';
import Header from '@/components/privacy-policy/header/Header'
import Hero from '@/components/privacy-policy/hero/Hero'
import Head from 'next/head';

const privacyPolicy = () => {
  return (
      <>
      <Head>
        <title>Privacy Policy - AppBroda</title>
        <meta name="description" content="AppBroda is a SaaS platform to help enable the purchase and sale of mobile advertisements for app publishers and developers."/>
      </Head>
    <Wrapper>
    <Header/>
    <Hero/>
   </Wrapper>
  </>
  )
}

export default privacyPolicy