import React from "react";
import { Box as Wrapper, Box, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Container from "@/components/common/Container";
import { guideList } from "@/utils/guides.utils";
import Button from "@/components/hoc/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <Wrapper>
      <Box background="#EAF5FB">
        <Text
          as="h1"
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          background="#EAF5FB"
          padding="5%"
          textAlign="center"
        >
          Guides
        </Text>
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap="5%"
          marginBottom="2%"
        >
          {guideList.map((guide) => {
            return (
              <Box
                color="brand.primary"
                borderRadius="6px"
                overflow="hidden"
                marginTop="5%"
                maxWidth="350px"
                width="100%"
                boxShadow="lg"
                key={guide.slug}
              >
                <Link href={`/guides/${guide.slug}`}>
                  <Box overflow="hidden" marginBottom="5%" borderRadius="6px">
                    <chakra.img
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      transition="transform .8s ease-out"
                      src={guide["feature-image"]}
                      height={{ base: "175px", md: "200px" }}
                      width="100%"
                      alt="guide"
                    />
                  </Box>
                  <Box paddingX="25px">
                    <Text
                      color="black"
                      as="h1"
                      fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    >
                      {guide.title}
                    </Text>
                    <Box
                      color="black"
                      paddingY="5%"
                      fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    >
                      {guide.description}
                    </Box>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Hero;
