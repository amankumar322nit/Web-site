import React from "react";
import { Box, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { GetstartedOfferList } from "@/utils/app-marketer.utils";

const Offer = () => {
  return (
    <Box as="section">
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY="5%"
        >
          <Box>
            <Text
              color="#289CD7"
              fontSize={{ base: "2xl", md: "4xl" }}
              as="h1"
              textAlign={{ base: "center", md: "start" }}
            >
              OUR OFFERINGS
            </Text>
            {GetstartedOfferList.map((offer, id) => {
              return (
                <Box
                  key={id}
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                  marginY="30px"
                  width="100%"
                  gap="5%"
                  alignItems={{ base: "center", md: "normal" }}
                >
                  <chakra.svg
                    src={offer.image}
                    as={Image}
                    alt="offer Image"
                    objectFit="contain"
                    w="100px"
                    h="100px"
                  />
                  <Box>
                    <Text
                      as="h1"
                      fontSize={{ base: "20px", md: "2xl" }}
                      textAlign={{ base: "center", md: "start" }}
                      paddingBottom="4px"
                    >
                      {offer.title}
                    </Text>
                    <Text
                      fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                      textAlign={{ base: "center", md: "start" }}
                    >
                      {offer.desc}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Offer;
