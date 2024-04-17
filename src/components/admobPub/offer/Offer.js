import React, { useEffect } from "react";
import { Box, Box as Wrapper, Text, chakra, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { OfferList } from "@/utils/AdmobPub.utils";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  margin: 5% 0;
  transform: translateY(0);
  opacity: 1;
  transition: 0.5s all ease;
  &.show {
    transform: translateY(250px);
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
    const observer = new IntersectionObserver(observe);
    const offers = document.querySelectorAll(".offer");
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
          <StyleBox key={id} className="offer">
            <Box
              backgroundImage={`url("${offer.background.src}")`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
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
                    paddingY="5%"
                    minWidth="300px"
                    width="100%"
                  >
                    <Text
                      fontSize={{ base: "3xl", md: "5xl" }}
                      fontWeight="bold"
                      as="h1"
                      color="#fff"
                      textAlign={{ base: "center", md: "start" }}
                      paddingBottom="5%"
                      lineHeight={{base:'30px',md:'55px',lg:'55px'}}
                    >
                      {offer.title}
                    </Text>
                    <Text
                      color="#fff"
                      as="p"
                      fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
                      textAlign={{ base: "center", md: "start" }}
                    >
                      {offer.para}
                    </Text>
                  </Box>
                  <Box width="100%">
                    <Center>
                      <chakra.svg
                        as={Image}
                        src={offer.image}
                        w={{ base: "75%", lg: "450px" }}
                        alt={"offer Img"}
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
