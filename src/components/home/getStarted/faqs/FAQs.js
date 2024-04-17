import React from "react";
import {
  chakra,
  Box,
  Box as Wrapper,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Image from "next/image";
import Container from "@/components/common/Container";
import { Faqs } from "@/utils/AdmobPub.utils";
import minus from "@/assets/svg/home/minus.svg";
import plus from "@/assets/svg/home/plus.svg";

const FAQs = () => {
  return (
    <Wrapper background="#EAF5FB">
      <Container>
        <Box width={{ base: "100%", md: "60%" }} paddingY="5%">
          <Text fontWeight="Bold" fontSize={{ base: "18px", md: "2xl" }} as="h1">
            Frequently Ask Questions
          </Text>
          <Accordion allowMultiple>
            {Faqs.map((faq, id) => {
              return (
                <AccordionItem key={id}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton _expanded={{ color: "brand.primary" }}>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            paddingLeft="2%"
                            fontSize={{ base: '18px', md: "2xl" }}
                            color="#289CD7"
                          >
                            {faq.ques}
                          </Box>
                          {isExpanded ? (
                            <chakra.svg src={minus} width={"11px"} as={Image} alt='minus'/>
                          ) : (
                            <chakra.svg src={plus} as={Image} alt='plus'/>
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} paddingLeft="5%">
                        {faq.ans}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default FAQs;
