import React, { useEffect } from "react";
import { Box, Box as Wrapper, chakra, Text } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import { BenefitsLists } from "@/utils/mediation-publishers.utils";
import Image from "next/image";
import VideoCall from "src/assets/svg/VideoCall.svg";
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
    <Wrapper marginTop={{base:'10%',md:'0'}}>
      <Container>
        <Box
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row" }}
          marginY="4%"
        >
          <Box width="90%" margin={{ base: "auto" }}>
            <Text
              fontWeight="Bold"
              fontSize={{ base: "2xl", md: "3xl" }}
              color="#289CD7"
              as="h1"
              textAlign={{base: "center", md: "start" }}
            >
              Trusted by top app publishers across the globe.
            </Text>
            {BenefitsLists.map((benefit, id) => {
              return (
                <StyleBox className="benefit" key={id}>
                  <Box
                    display="flex"
                    padding="2%"
                    key={id}
                    flexDirection={{ base: "column", md: "row" }}
                    gap="5%"
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
                        color="#289CD7"
                        fontSize={{ base: "20px", md: "2xl" }}
                        textAlign={{base: "center", md: "start" }}
                      >
                        {benefit.title}
                      </Text>
                      <Text fontSize={{ base: "16px", md: "18px", lg: "18px" }} textAlign={{base: "center", md: "start" }}>
                        {benefit.paragraph}
                      </Text>
                    </Box>
                  </Box>
                </StyleBox>
              );
            })}
          </Box>
          <Box width={{base:'100%',md:'90%'}} display='flex' justifyContent='center' alignItems='center'>
              <chakra.svg as={Image} src={VideoCall} alt={'videoCall'} width='90%' />
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Benefits;
