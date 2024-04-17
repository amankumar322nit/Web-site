import React from "react";
import { Box, Button, Text, chakra } from "@chakra-ui/react";
import { catalogues, buttons } from "@/utils/success-stories.utils";
import Image from "next/image";
import Container from "@/components/common/Container";
import Link from "next/link";

const Card = () => {
  return (
    <Box>
      <Container>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          gap="5%"
          alignItems="center"
        >
          {/* {buttons.map((button, i) => {
            return (
              <Button
                key={i}
                border="1px solid blue"
                color="brand.primary"
                w="fit-content"
                marginY="3%"
                backgroundColor="#fff"
              >
                {button}
              </Button>
            );
          })} */}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap="5%"
          marginBottom="5%"
        >
          {catalogues.map((catalogue, id) => {
            return (
              <Box
                color="brand.primary"
                borderRadius="6px"
                overflow="hidden"
                marginTop="5%"
                maxWidth="350px"
                width="100%"
                boxShadow="lg"
                key={id}
              >
                <Link
                  key={id}
                  href={{
                    pathname: `/success-stories/${catalogue.heading}`,
                  }}
                >
                  <Box
                    overflow="hidden"
                    marginBottom="5%"
                    borderRadius="6px"
                    border="1px solid #F5ABBE"
                  >
                    <chakra.svg
                      as={Image}
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      transition="transform .8s ease-out"
                      src={catalogue.img}
                      width="100%"
                      borderRadius="6px"
                      alt="blog"
                    />
                  </Box>
                  <Box paddingX="25px">
                    <Text as="h1" fontSize="1xl" color="brand.primary">
                      {catalogue.heading}
                    </Text>
                    <Text
                      color="black"
                      as="h1"
                      fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    >
                      {catalogue.title}
                    </Text>
                    <Box
                      color="black"
                      paddingY="5%"
                      fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    >
                      {catalogue.para}
                    </Box>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Card;
