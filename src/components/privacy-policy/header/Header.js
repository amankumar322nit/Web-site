import React from 'react'
import {Text,Box} from '@chakra-ui/react'

const Header = () => {
  return (
    <Box
    background={'#EAF5FB'}>
    <Text
      as='h1'
      fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
      padding='5%'
      textAlign='center'>
       Privacy Policy
      </Text>
    </Box>
  )
}

export default Header