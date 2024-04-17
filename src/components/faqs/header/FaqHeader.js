import React from 'react'
import {Text,Box, chakra} from '@chakra-ui/react'

const FaqHeader = () => {
  return (
    <Box
    background={'#EAF5FB'}>
    <Text
      as='h1'
      fontSize={{base:'4xl',md:'4xl',lg:'5xl'}}
      paddingY='3%'
      textAlign='center'>
       Frequently Asked Questions
      </Text>
      <Box
      width='80%'
      margin='0 auto'>
      <Text
      fontSize={{base:'2xl',md:'2xl'}}
      paddingBottom='10%'
      textAlign='center'>
      If you don’t find the answer to your question here, just send us an email at<span style={{color:'#1717DD',fontWeight:'bold'}}> publisher@appbroda.com</span> and we’d be happy to help you.
      </Text>
      </Box>
    </Box>
  )
}

export default FaqHeader