import { Box, Text, HStack, chakra } from "@chakra-ui/react";
import React from "react";
import Waves from "src/assets/svg/Waves.svg";
import groupPhoto1 from "src/assets/svg/aboutUs/groupPhoto1.svg";
import groupPhoto2 from "src/assets/svg/aboutUs/groupPhoto2.svg";
import Image from "next/image";

const Intro = () => {
  return (
    <Box as="section" bg="brand.primary" position="relative">
      <Box
        maxW={"1512px"}
        w="100%"
        padding={{ base: "4%", md: "0 0 0 35px" }}
        marginX="auto"
      >
        <HStack
          justifyContent={"space-between"}
          alignItems={{ base: "center", lg: "flex-start" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          {/* left box */}
          <Box
            padding={{ base: "20px 0", lg: "5% 0 270px 0%" }}
            zIndex="3"
            width={{ base: "100%", lg: "50%" }}
            maxW={{ base: "628px", lg: "100%" }}
          >
            <Text
              color="#FAC514"
              marginY="20px"
              as='h1'
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              ABOUT US
            </Text>
            <Text color="#fff" fontSize={{ base: "20px", md: "20px", lg: "2xl" }}>
              We are a SAAS company with a vision to become a one stop solution
              for an app publisher that fuels their entire mobile App’s Growth.
              We help app publishers focus on what they do best – creating great
              apps – while we enable their business expansion in the app
              economy.
            </Text>
          </Box>
          {/* right box */}
          <Box
            display="flex"
            justifyContent="flex-end"
            h={{ base: "fit-content", lg: "440px" }}
            paddingBottom={{ base: "60px", lg: "0" }}
            maxW="520px"
            width="100%"
            position="relative"
            marginInlineStart="0"
            zIndex="3"
          >
            <chakra.svg
              src={groupPhoto1}
              as={Image}
              alt="group-photo"
              w={{ base: "85%", lg: "441px" }}
              objectFit={"cover"}
              h={{ base: "fit-content", lg: "386px" }}
            />
            <chakra.svg
              as={Image}
              src={groupPhoto2}
              alt="group-photo"
              w="169px"
              h="122px"
              position="absolute"
              top="10"
              left="0"
            />
            <chakra.svg
              src={groupPhoto2}
              as={Image}
              alt="group-photo"
              w="169px"
              h="122px"
              position="absolute"
              right="10"
              bottom="0"
            />
          </Box>
        </HStack>
      </Box>
      <chakra.svg
        as={Image}
        src={Waves}
        alt="wave"
        position="absolute"
        width="100%"
        height={{ base: "143px", lg: "335px" }}
        bottom="0"
        zIndex="1"
      />
    </Box>
  );
};

export default Intro;
