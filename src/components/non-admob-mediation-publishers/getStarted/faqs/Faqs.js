import React from 'react'
import {
    Box,
    Box as Wrapper,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    chakra
  } from "@chakra-ui/react";
import Container from '@/components/common/Container';
import {FaqsList} from '@/utils/mediation-publishers.utils'
import Image from 'next/image';
import plus from '@/assets/svg/mediation-publishers/plus.svg';
import minus from '@/assets/svg/mediation-publishers/minus.svg';

const Faqs = () => {
  return (
    <Wrapper background='#F5EBF4'>
        <Container>
        <Box display='grid'
          gridTemplateColumns={{ base: "100%", md: '60% 40%' }}
          paddingY='5%'>
            <Box>
      <Text fontWeight='Bold'
      fontSize={{ base: '18px', md: "2xl" }}
                          as='h1'
                      margin='3% 0'>
      Frequently Ask Questions
      </Text>
      <Accordion allowMultiple>
  {FaqsList.map((faq,id)=> {
    return(
  <AccordionItem key={id} margin='0 2%'>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton  _expanded={{ color: 'brand.primary' }}>
            <Box as="span" flex='1' textAlign='left' paddingLeft='2%' fontSize={{ base: '18px', md: "2xl" }} color='#9E3A94'>
              {faq.ques}
            </Box>
            {isExpanded ? (
              <chakra.svg
              src={minus}
              as={Image}
              alt='minus'
              />
            ) : (
              <chakra.svg
              src={plus}
              alt='plus'        
              as={Image}/>
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} paddingLeft='5%'>
          {faq.ans}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>)})}
</Accordion>
      </Box>
      </Box>
    </Container>
  </Wrapper>
  )
}

export default Faqs
