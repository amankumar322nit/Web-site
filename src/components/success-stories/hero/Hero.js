import React from "react";
import { Box as Wrapper, Box, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import hero from "src/assets/svg/success-stories/hero.svg";

const Hero = () => {
  return (
    <Wrapper background="#EAF5FB">
      <Container>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
          <Box
            display="flex"
            flexDirection="column"
            paddingY="1%"
            width={{ base: "100%", md: "60%" }}
            gap="2%"
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: "1xl", md: "2xl" }}
              as="h1"
              color="brand.primary"
            >
              SUCCESS STORIES
            </Text>
            <Text fontSize={{ base: "3xl", md: "4xl",lg: "4xl" }} as="h1">
              PocketFM increases Ad Request CPM by 90% after switching to
              AppBroda
            </Text>
            <Text
              fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
              as="p"
              fontWeight="bold"
            >
              PocketFM is a well-funded company that raised $65M in its Series C
              funding round. PocketFM helps millions of audiobook lovers to
              enjoy and listen to their favorite audiobooks on the go.
              <br />
              In need of scaling their ad revenues, they turned to AppBroda to
              manage their daily ad ops, integrate new demand partners, and
              optimize their ad revenue without hampering user experience.
            </Text>
            <Box display="flex" flexDirection="row" marginTop="5%">
              <Box borderLeft="5px solid black" width="50%">
                <Text
                  color="#289CD7"
                  as="h1"
                  marginX="5%"
                  fontSize={{ base: "2xl", md: "3xl" }}
                >
                  Category
                </Text>
                <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }} marginX="5%">
                  Music and Audio
                </Text>
              </Box>
              <Box borderLeft="5px solid black" width="50%">
                <Text
                  color="#289CD7"
                  as="h1"
                  marginX="5%"
                  fontSize={{ base: "2xl", md: "3xl" }}
                >
                  Objective
                </Text>
                <Text
                  fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
                  marginX="5%"
                >
                  Monetization
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <chakra.svg as={Image} src={hero} alt="hero" h='700px'/>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Hero;
