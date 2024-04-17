import React, { useEffect } from "react";
import { Box, Box as Wrapper, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { TrustList } from "@/utils/mediation-publishers.utils";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  transform: translateY(0);
  opacity: 1;
  transition: 1s all ease;
  &.show {
    transform: translateY(150px);
    opacity: 0;
    position: relative;
  }
`;

const Benefit = () => {
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
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY="2%"
        >
          <Box>
            <Text
              as="h1"
              fontSize={{ base: "2xl", md: "3xl",lg:'3xl' }}
              color="#9E3A94"
              width="80%"
              marginY="5%"
              textAlign={{base: "center", md: "start" }}
            >
              Trusted by top app publishers across the globe.
            </Text>
           
            {TrustList.map((benefit, id) => {
              return (
                <StyleBox key={id} className="benefit">
                   <Box
                    display="flex"
                    padding="2%"
                    gap='5%'
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="center"
                  >
                    <chakra.svg
                      as={Image}
                      src={benefit.image}
                      margin={{ base: "auto" }}
                      alt='benefit'
                    />
                    <Box>
                      <Text
                        fontWeight="Bold"
                        color="#9E3A94"
                        fontSize={{ base: "16px", md: "18px", lg: "2xl" }}
                        textAlign={{base: "center", md: "start" }}
                      >
                        {benefit.title}
                      </Text>
                      <Text fontSize={{ base: "16px", md: "18px", lg: "18px" }} width="90%" textAlign={{base: "center", md: "start" }}>
                        {benefit.paragraph}
                      </Text>
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

export default Benefit;
