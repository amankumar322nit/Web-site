import React from "react";
import { Box, Box as Wrapper, chakra, Text } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { HeroIcons } from "@/utils/AdmobPub.utils";
import GooglePartner from "src/assets/svg/GooglePartner.svg";
import Waves from "src/assets/svg/Waves.svg";

const Hero = () => {
  return (
    <Wrapper position="relative">
      <Box background="#289CD7">
        <Container>
          <Box
            display="grid"
            gridTemplateColumns={{ base: "column", md: "60% 40%" }}
            paddingTop="3%"
            paddingBottom={{ base: "30%", md: "15%" }}
          >
            <Box>
              <Text
                color="#fff"
                as="h1"
                fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              >
                Grow your ad revenue by upto 40% with a Google Channel Partner!
              </Text>
              <Box
                display="flex"
                flexDirection={{ base: "column-reverse", md: "column" }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  marginY="3%"
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  {HeroIcons.map((icon, id) => {
                    return (
                      <Box key={id} width={{ base: "140px", md: "170px" }}>
                        <center>
                          <chakra.svg
                            as={Image}
                            src={icon.image}
                            alt="hero-icon"
                          />
                          <Text
                            textAlign="center"
                            fontSize={{ base: "15px", md: "16px", lg: "18px" }}
                            padding="5% 2%"
                            color="#fff"
                          >
                            {icon.para}
                          </Text>
                        </center>
                      </Box>
                    );
                  })}
                </Box>
                <chakra.svg
                  as={Image}
                  src={GooglePartner}
                  paddingTop="3%"
                  alt="google-partner"
                  zIndex="3"
                  position="relative"
                  width="30%"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <chakra.svg
        as={Image}
        src={Waves}
        alt="wave"
        width="100%"
        position="absolute"
        height={{ base: "107px", lg: "320px" }}
        bottom="0"
        zIndex="0"
      />
    </Wrapper>
  );
};

export default Hero;
