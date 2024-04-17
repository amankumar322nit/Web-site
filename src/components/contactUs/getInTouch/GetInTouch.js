import Container from "@/components/common/Container";
import { Box, HStack, Text, chakra } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import getInTouchGraphic from "src/assets/svg/contactUs/getInTouchGraphic.svg";
import Button from "@/components/hoc/Button";

const GetInTouch = () => {
  return (
    <Box as="section" bg="#E8E8FC" paddingY="60px">
      <Container>
        <HStack
          justifyContent={"space-between"}
          alignItems={{ base: "center", lg: "flex-start" }}
          flexDirection={{ base: "column", lg: "row" }}
          //overflowX={"hidden"}
        >
          <Box
            paddingY={{ base: "3%", lg: "5%" }}
            width={{base:'100%',lg:'50%'}}
            maxW="628px"
          >
            <Text
              as="h1"
              fontWeight="700"
              marginBottom="40px"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Get Started With AppBroda Today
            </Text>
            <Text
              marginBottom={{ base: "40px", lg: "20px" }}
              fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
            >
              AppBroda is more than an Adtech Platform. We are a go-to place for
              publishers. Setup a free demo to know more!
            </Text>
            <Link href='/get-started'>
            <Button
              sx={{
                backgroundColor: "#54CC61",
                width: {
                  base: "200px",
                  md: "380px",
                },
                fontSize: {
                  base: "16px",
                  md: "26px",
                },
                _hover: {
                  backgroundColor: "#54CC61",
                },
              }}
            >
              Get Started
              </Button>
              </Link>
          </Box>
          <Box>
          <chakra.svg
            as={Image}
            src={getInTouchGraphic}
            alt={"get-in-touch"}
            />
            </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default GetInTouch;
