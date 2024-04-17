import Container from "@/components/common/Container";
import { successStoryPoints } from "@/utils/app-marketer.utils";
import {
  Box,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import midAges from "src/assets/png/midAges.png";

const SuccessStory = () => {
  return (
    <Box as="section">
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY={{ base: "8%", md: "3%" }}
        >
          <VStack alignItems="flex-start" justifyContent="space-around">
            <HStack justifyContent="space-between" w="100%" gap="20px">
              <Box>
                <Text
                  as="h1"
                  fontSize={{ base: "lg", md: "4xl" }}
                  color="#289CD7"
                >
                  FROM STRUGGLE TO SUCCESS
                </Text>
                <Text as="h1" fontSize={{ base: "lg", md: "2xl" }}>
                  How Booda Games pumps mobile IAP by 63X
                </Text>
              </Box>
              <chakra.img
                as={Image}
                alt="mid ages game logo"
                src={midAges}
                title="Mid Ages: Medieval Idle Games"
              />
            </HStack>
            <UnorderedList listStyleType="none" margin="0" width="100%">
              {successStoryPoints.map(({ id, stat, title }) => {
                return (
                  <ListItem key={id} marginY="10px" width="100%">
                    <Text
                      as="h2"
                      fontSize={{ base: "lg", sm: "larger" }}
                      textAlign={{ base: "center", md: "start" }}
                    >
                      <chakra.span
                        fontSize={{
                          base: "24px",
                          sm: "28px",
                          md: "32px",
                          lg: "44px",
                        }}
                        fontWeight="bold"
                        color="#04A44D"
                      >
                        {stat}
                      </chakra.span>
                      &nbsp;&nbsp;
                      {title}
                    </Text>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessStory;
