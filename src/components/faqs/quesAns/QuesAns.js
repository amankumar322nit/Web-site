import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import { faqsList } from "@/utils/faqs.utils";
import minus from "src/assets/svg/faqs/minus.svg";
import plus from "src/assets/svg/faqs/plus.svg";

const Hero = () => {
  return (
    <Box padding="50px 0">
      <Accordion allowMultiple>
        {faqsList.map((faq, id) => {
          return (
            <AccordionItem key={id} margin="0 2%">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ color: "brand.primary" }}>
                      {isExpanded ? (
                        <chakra.svg src={minus} width={"11px"} as={Image} alt='minus'/>
                      ) : (
                        <chakra.svg src={plus} as={Image} alt='plus'/>
                      )}
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        paddingLeft="2%"
                        fontSize={{ base: '18px', md: "2xl" }}
                      >
                        {faq.ques}
                      </Box>
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
  );
};

export default Hero;
