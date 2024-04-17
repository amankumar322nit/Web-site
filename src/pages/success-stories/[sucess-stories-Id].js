import React from 'react'
import { Box as Wrapper } from '@chakra-ui/react';
import Hero from '@/components/success-stories/hero/Hero';
import Background from '@/components/success-stories/background/Background';

const successStories = () => {
  return (
    <Wrapper>
    <Hero/>
    <Background/>
    </Wrapper>
  )
}

export default successStories