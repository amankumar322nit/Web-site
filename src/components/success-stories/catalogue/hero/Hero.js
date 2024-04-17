import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Container from "@/components/common/Container";

const Hero = () => {
  return (
    <Box background="#EAF5FB 70%">
      <Container>
        <Text
          as="h1"
          fontSize={{ base: "1xl", md: "1xl", lg: "2xl" }}
          paddingTop="5%"
          textAlign="center"
          color="brand.primary"
        >
          {"APPBRODA'S CASE STUDIES"}
        </Text>
        <Text as="h1" fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} textAlign="center">
          Success Stories
        </Text>
          <Box >
            <Text
              fontSize={{ base: "18px", md: "20px", lg: "20px" }}
              padding="5%"
              textAlign="center"
              fontWeight="bold"
            >
              Since inception, we have helped our publishers across multiple
              industry verticals see massive changes, be it the increase in
              their revenue or their App Business growth. You can read more
              about our happy publishers and their stories.
            </Text>
          </Box>
      </Container>
    </Box>
  );
};

export default Hero;
