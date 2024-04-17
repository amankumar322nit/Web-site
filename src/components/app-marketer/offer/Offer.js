import React, { useEffect } from "react";
import { Box, Box as Wrapper, Text, chakra, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { OfferList } from "@/utils/app-marketer.utils";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  margin: 5% 0;
  transform: translateY(0);
  opacity: 1;
  transition: 1s all ease;
  &.show {
    transform: translateY(150px);
    opacity: 0;
    position: relative;
  }
`;

const Offer = () => {
  const observe = (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.remove("show");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.add("show");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observe, { threshold: 0.2 });
    const offers = document.querySelectorAll(".offers");
    offers.forEach((offer) => observer.observe(offer));
    return () => observer.disconnect();
  }, []);
  return (
    <Wrapper>
      <Container>
        <Center>
          <Text
            fontSize={{ base: "3xl", md: "4xl",lg: "5xl" }}
            position='relative'
            bottom={{ base: '-70px', md: '-40px' }}
            as="h1"
            justifyItems="center"
          >
            WHAT WE OFFER?
          </Text>
        </Center>
      </Container>
      {OfferList.map((offer, id) => {
        return (
          <StyleBox key={id} className="offers">
            <Box
              backgroundImage={`url("${offer.background.src}")`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              paddingY="2%"
              paddingTop={{ base: "15%", md: "0" }}
            >
              <Container>
                <Box
                  paddingTop="5%"
                  flexDirection={{ base: "column-reverse", md: "row" }}
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    padding={{ base: "5% 0 5% 0", md: "5% 0% 5% 0" }}
                    minWidth="300px"
                    width="100%"
                  >
                    <Text
                      fontSize={{ base: "2xl", md: "5xl" }}
                      fontWeight="bold"
                      color="#fff"
                      textAlign={{ base: "center", md: "start" }}
                      paddingBottom="5%"
                      lineHeight={{base:'30px',md:'55px',lg:'55px'}}
                    >
                      {offer.title}
                    </Text>
                    <Text
                      fontSize={{ base: "16px", md: "18px", lg: "2xl" }}
                      color="#fff"
                      textAlign={{ base: "center", md: "start" }}
                      paddingBottom="5%"
                    >
                      {offer.para}
                    </Text>
                  </Box>
                  <Box width="100%">
                    <Center>
                      <chakra.svg
                        as={Image}
                        src={offer.image}
                        w={{ base: "75%", lg: "500px" }}
                        alt="offer-image"
                        margin='5%'
                      />
                    </Center>
                  </Box>
                </Box>
              </Container>
            </Box>
          </StyleBox>
        );
      })}
    </Wrapper>
  );
};

export default Offer;
