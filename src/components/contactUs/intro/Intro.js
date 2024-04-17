import Container from "@/components/common/Container";
import { Box, HStack, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import contactUsGraphic from "src/assets/svg/contactUs/contactUsGraphic.svg";
import Waves from "src/assets/svg/Waves.svg";

const Intro = () => {
  return (
    <Box as="section" bg="brand.primary" position="relative">
      <Container>
        <HStack
          justifyContent={"space-between"}
          alignItems={{ base: "center", lg: "flex-start" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            padding={{ base: "20px 0", lg: "5% 0 0 0" }}
            zIndex="3"
            width="100%"
            maxW="628px"
          >
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="700"
              color="#fff"
              as='h1'
              marginBottom={{ base: "40px", lg: "0" }}
              paddingY='5%'
            >
              Let <chakra.span color="#FFC727">AppBroda</chakra.span> help you
              grow your App Business
            </Text>
          </Box>
          <chakra.svg
            src={contactUsGraphic}
            as={Image}
            zIndex="3"
            alt="contact-us-graphic"
            w={{ base: "85%", lg: "600px" }}
            objectFit={"cover"}
            h={{ base: "fit-content", lg: "550px" }}
          />
        </HStack>
      </Container>
      <chakra.svg
        as={Image}
        src={Waves}
        alt="wave"
        position="absolute"
        width="100%"
        height={{  base: "107px", lg: "250px" }}
        bottom="0"
        zIndex="1"
      />
    </Box>
  );
};

export default Intro;
