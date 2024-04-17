import React, { useEffect } from "react";
import { Box, Box as Wrapper, chakra, Text } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import { FeaturesList } from "@/utils/AdmobPub.utils";
import Image from "next/image";
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

const Features = () => {
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
    const features = document.querySelectorAll(".feature");
    features.forEach((feature) => observer.observe(feature));
    return () => observer.disconnect();
  }, []);
  return (
    <Wrapper background="#EAF5FB">
      <Container>
        <Text
          fontWeight="Bold"
          as="h1"
          width={{ base: "100%", md: "50%" }}
          fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
          paddingY="5%"
        >
          All the good things you get access to.
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          width={{ base: "100%", md: "80%" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          overflow="hidden"
        >
          {FeaturesList.map((feature, id) => {
            return (
              <Box key={id} width={{ base: "50%", md: "40%" }} marginY="2%">
                <StyleBox className="feature">
                  <center>
                    <chakra.svg
                      as={Image}
                      src={feature.image}
                      alt={"feature"}
                      w={{ base: "120px", md: "150px" }}
                    />
                    <Text
                      as="h1"
                      wordBreak='keep-all'
                      fontSize={{ base: "15px", md: "16px", lg: "18px" }}
                    >
                      {feature.title}
                    </Text>
                    <Text width="80%" fontSize={{ base: "12px", md: "14px" }} wordBreak='keep-all'>
                      {feature.paragraph}
                    </Text>
                  </center>
                </StyleBox>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Features;
