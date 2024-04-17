import React from 'react'
import {Text,Box, chakra} from '@chakra-ui/react'
import {blogCarouselList} from '@/utils/blog.utils'
import Image from 'next/image'

const Heading = () => {
  return (
    <Box
    background={'#EAF5FB'}>
    <Text
      as='h1'
      fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
      padding='5%'
      textAlign='center'>
       Glossary
      </Text>
      <Box
      width='50%'
      margin='0 auto'>
      <Text
      fontSize={{ base: "18px", md: "20px", lg: "20px" }}
      fontWeight='bold'
      paddingBottom='10%'
      textAlign='center'>
      Everything you need to know about AdTech and Mobile App industry!
      </Text>
      </Box>
    </Box>
  )
}

export default Heading