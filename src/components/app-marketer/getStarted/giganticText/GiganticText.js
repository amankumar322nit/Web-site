import Container from "@/components/common/Container";
import { Heading, Box } from "@chakra-ui/react";
import React from "react";

const GiganticText = () => {
  return (
    <Box as="section" background="#E6F6ED">
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY="10%"
          alignContent="center"
        >
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            textAlign="center"
            color="#04A44D"
          >
            Launch your app on a trajectory towards success, propelling your
            business on a path to triumph
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default GiganticText;
