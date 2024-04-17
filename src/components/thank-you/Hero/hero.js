import React from "react";
import { Text, Box, Container } from "@chakra-ui/react";

const ThankYou = () => {
  return (
    <Box background={"#EAF5FB"}>
      <Text
        as="h1"
        fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
        paddingY="5%"
        textAlign="center"
      >
        Thank you for your interest in AppBroda!
      </Text>
      <Text
        fontSize={{ base: "2xl", md: "2xl" }}
        paddingBottom="5%"
        textAlign="center"
      >
        Our team will get in touch with you shortly!
      </Text>
    </Box>
  );
};

export default ThankYou;
