import Container from "@/components/common/Container";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Philosophy = () => {
  return (
    <Box as="section">
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY={{ base: "10%", md: "5%" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Box>
            <Text color="#289CD7" fontSize={{ base: "2xl", md: "4xl" }} as="h1">
              OUR PHILOSOPHY
            </Text>
            <Text fontSize={{ base: "16px", md: "18px", lg: "2xl" }}>
              Collaborate with a vibrant community of app enthusiasts known for
              their proactive nature, transparent communication, and inventive
              problem-solving approach.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Philosophy;
