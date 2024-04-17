import {
  Box,
  Text,
  HStack,
  Image as ChakraImage,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import missionGraphic from "src/assets/svg/aboutUs/missionGraphic.svg";

const Mission = () => {
  return (
    <Box as="section" bg="#fff" marginTop={{ base: "40px", lg: "0" }}>
      <Container>
        <Box
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box width={"100%"} maxWidth="628px">
            <Text
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Our Mission
            </Text>
            <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
            >
              To help
              <chakra.span color="brand.primary" fontWeight='bold'> app developers </chakra.span>
              turn their apps into scalable and successful businesses.
            </Text>
          </Box>
          <ChakraImage as={Image} src={missionGraphic} width={"100%"} />
        </Box>
      </Container>
    </Box>
  );
};

export default Mission;
