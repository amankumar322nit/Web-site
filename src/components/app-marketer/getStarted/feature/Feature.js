import React, { useEffect } from "react";
import { Box, Box as Wrapper, Text, chakra, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { FeaturesList } from "@/utils/app-marketer.utils";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  transform: translateY(0);
  opacity: 1;
  transition: 1s all ease;
  display: flex;
  align-items: center;
  flex-direction: column;
  &.show {
    transform: translateY(150px);
    opacity: 0;
    position: relative;
  }
`;

const Feature = () => {
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
    <Wrapper background="#E6F6ED">
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY="5%"
        >
          <Box>
            <Text
              as="h1"
              fontSize={{ base: "2xl", md: "3xl" }}
              textAlign={{ base: "center", md: "start" }}
            >
              Features that help grow your apps
            </Text>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              flexWrap="wrap"
              width="100%"
              gap="16px 0"
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              {FeaturesList.map((feature, id) => {
                return (
                  <Box
                    key={id}
                    width={{ base: "50%", md: "40%" }}
                    margin={{ base: "2% 0", md: "5%" }}
                  >
                    <StyleBox className="feature">
                      <chakra.svg
                        as={Image}
                        src={feature.image}
                        alt={"feature"}
                        w={{ base: "120px", md: "150px" }}
                      />
                      <Text
                        as="h1"
                        marginTop="4px"
                        width="80%"
                        textAlign="center"
                        fontSize={{ base: "15px", md: "16px", lg: "18px" }}
                      >
                        {feature.para}
                      </Text>
                    </StyleBox>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Feature;
