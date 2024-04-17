import React from "react";
import { Box, Box as Wrapper, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { HeroIcons } from "@/utils/mediation-publishers.utils";
import Waves from "src/assets/svg/Waves.svg";
import GooglePartner from "src/assets/svg/GooglePartner.svg";
import brands from "src/assets/svg/mediation-publishers/brands.svg";

const Hero = () => {
  return (
    <Wrapper>
      <Box position="relative">
        <Box background="#9E3A94">
          <Container>
            <Box
              display="grid"
              gridTemplateColumns={{ base: "column", md: "60% 40%" }}
              paddingY="3%"
              paddingBottom={{ base: "30%", md: "15%" }}
            >
              <Box>
              <Box>
                <Text
                  color="#fff"
                  as="h1"
                  fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
                >
                  <chakra.span color="#FAC514">Grow</chakra.span> your{" "}
                  <chakra.span color="#FAC514"> ad revenue </chakra.span> with
                  the highest performing{" "}
                  <chakra.span color="#FAC514">data-science</chakra.span>{" "}
                  optimizations
                </Text>
                </Box>
                <Text
                  fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
                    color="#fff"
                    paddingY='15px'
                >
                  Turn your ad network data into ROI by going from raw data to
                  industry leading predictive models in minutes, not months. No
                  code involved.
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
                        <Box key={id} width={{ base: "130px", md: "165px" }}>
                          <center>
                            <chakra.svg
                              as={Image}
                              src={icon.image}
                              alt="hero-icon"
                            />
                            <Text
                              textAlign="center"
                              fontSize={{
                                base: "15px",
                                md: "16px",
                                lg: "17px",
                              }}
                              padding="5% 15%"
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
                    width="30%"
                    src={GooglePartner}
                    alt="google-partner"
                    position="relative"
                    zIndex="1"
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
          height={{  base: "107px", lg: "320px" }}
          bottom="0"
          zIndex="0"
        />
      </Box>
    </Wrapper>
  );
};

export default Hero;
