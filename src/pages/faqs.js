import React from 'react'
import {Box as Wrapper} from '@chakra-ui/react';
import Heading from '@/components/faqs/header/FaqHeader';
import Head from 'next/head';

const faqs = () => {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions (FAQs) - AppBroda</title>
        <meta name="description" content="Get your every question answered from our frequently asked questions (FAQs) page. About AppBroda, app monetization, user acquisitions and more."/>
      </Head>
    <Wrapper>
    <Heading/>
      </Wrapper>
      </>
  )
}

export default faqs