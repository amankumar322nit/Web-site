import React from "react";
import { Box, Box as Wrapper, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import Waves from "src/assets/svg/Waves.svg";
import GooglePartner from "src/assets/svg/GooglePartner.svg";

const Hero = () => {
  return (
    <Wrapper>
      <Box position="relative">
        <Box background="#04A44D">
          <Container>
            <Box
              display="grid"
              gridTemplateColumns={{ base: "column", md: "60% 40%" }}
              paddingY="3%"
              paddingBottom={{ base: "30%", md: "15%" }}
            >
              <Box>
                <Text
                  color="#fff"
                  as="h1"
                  fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
                >
                  Speedily{" "}
                  <chakra.span style={{ color: "#FAC514" }}>scale</chakra.span>{" "}
                  your app to{" "}
                  <chakra.span style={{ color: "#FAC514" }}>new</chakra.span>{" "}
                  heights
                </Text>
                <Box
                  display="flex"
                  flexDirection={{ base: "column-reverse", md: "column" }}
                >
                  <chakra.svg
                    as={Image}
                    width="30%"
                    paddingY={{ base: "10px", md: "20px" }}
                    src={GooglePartner}
                    alt="google-partner"
                    position="relative"
                    zIndex="1"
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <chakra.svg
          as={Image}
          src={Waves}
          alt="wave"
          width="100%"
          position="absolute"
          height={{ base: "107px", lg: "320px" }}
          bottom="0"
          zIndex="0"
        />
      </Box>
    </Wrapper>
  );
};

export default Hero;
