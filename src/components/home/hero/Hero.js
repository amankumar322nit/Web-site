import React from "react";
import { Box, chakra, Box as Wrapper, Text } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import GooglePartner from "src/assets/svg/GooglePartner.svg";
import launching_cuate from "src/assets/svg/home/launching_cuate.svg";
import brands from "src/assets/svg/home/brands.svg";
import Button from "@/components/hoc/Button";
import Typewriter from "typewriter-effect";
import Link from "next/link";
const typewriterDelay = 1000; //in milliseconds
const typewriterDeleteSpeed = 7;

const Hero = () => {
  return (
    <Wrapper background="brand.primary">
      <Container>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row-reverse" }}
          position="relative"
        >
          <Box
            padding={{ base: "3% 0 0 0", md: "10% 0 0 0" }}
            display="flex"
            flexDirection="column"
            width={{ base: "100%", md: "70%" }}
            zIndex="2"
            position={{ base: "static", md: "absolute" }}
            left="0"
          >
            <Text
              color="#fff"
              mt="1"
              fontWeight="Bold"
              as="h1"
              fontSize={{ base: "2xl", md: "2xl", lg: "44px" }}
            >
              Revolutionizing App Business
            </Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              fontWeight="bold"
              fontSize={{ base: "18px", md: "20px", lg: "24px" }}
              color="#FAC514"
            >
              with&nbsp;
              <Typewriter
                options={{
                  loop: true,
                  delay: 60,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Data-Driven Strategies")
                    .pauseFor(typewriterDelay)
                    .deleteAll(typewriterDeleteSpeed)
                    .typeString("High eCPM Demand")
                    .pauseFor(typewriterDelay)
                    .deleteAll(typewriterDeleteSpeed)
                    .typeString("Ad Mediation Optimization")
                    .pauseFor(typewriterDelay)
                    .deleteAll(typewriterDeleteSpeed)
                    .typeString("40% Ad Revenue Growth")
                    .pauseFor(typewriterDelay)
                    .deleteAll(typewriterDeleteSpeed)
                    .start();
                }}
              />
            </Box>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "brand.primary",
                marginTop: "40px",
                width: {
                  base: "110px",
                  md: "110px",
                  lg: "157px",
                },
              }}
            >
              <Link href="/get-started">Setup A Demo</Link>
            </Button>
            <chakra.svg
              as={Image}
              marginY={{ base: "40px", md: "40px", lg: "40px" }}
              width={{ base: "110px", md: "110px", lg: "157px" }}
              src={GooglePartner}
              alt="google-partner"
            />
          </Box>
          <Box width={{ base: "100%", md: "40%" }}>
            <chakra.svg
              position="relative"
              overflow="auto"
              zIndex={"0"}
              top={{ sm: "75%", md: "75px", lg: "75px" }}
              as={Image}
              src={launching_cuate}
              alt="hero-image"
            />
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Hero;
