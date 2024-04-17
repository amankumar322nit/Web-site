import React, { useEffect } from "react";
import { Box, Box as Wrapper, chakra, Text } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import { BenefitsLists } from "@/utils/AdmobPub.utils";
import Image from "next/image";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  transform: translateY(0);
  opacity: 1;
  transition: .5s all ease;
  &.show {
    transform: translateY(100px);
    opacity: 0;
    position: relative;
  }
`;

const Benefits = () => {
  const observe = (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.remove("show");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.add("show");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observe);
    const benefits = document.querySelectorAll(".benefit");
    benefits.forEach((benefit) => observer.observe(benefit));
    return () => observer.disconnect();
  }, []);
  return (
    <Wrapper>
      <Container>
        <Box width={{ base: "100%", md: "60%" }} paddingY="5%">
          <Text
            fontWeight="Bold"
            fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
            color="#289CD7"
            as="h1"
            textAlign={{base: "center", md: "start" }}
          >
            Trusted by top app publishers across the globe.
          </Text>
          <Box>
            {BenefitsLists.map((benefit, id) => {
              return (
                <StyleBox className="benefit" key={id}>
                  <Box
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    marginTop="2%"
                    padding="2%"
                  >
                    <chakra.svg
                      as={Image}
                      alt={'benefit'}
                      src={benefit.image}
                      margin={{ base: "auto" }}
                    />
                    <Box marginLeft="5%">
                      <Text
                        fontWeight="Bold"
                        color="#289CD7"
                        fontSize={{ base: "16px", md: "18px", lg: "2xl" }}
                        textAlign={{base: "center", md: "start" }}
                      >
                        {benefit.title}
                      </Text>
                      <Text fontSize={{ base: "16px", md: "18px", lg: "18px" }} textAlign={{base: "center", md: "start" }}>{benefit.paragraph}</Text>
                    </Box>
                  </Box>
                </StyleBox>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Benefits;
