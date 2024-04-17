import { GridItem, chakra, Box, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export const Perk = ({ graphic, title, subTitle }) => {
  return (
    <GridItem display="flex" alignItems="center">
      <chakra.svg
        as={Image}
        src={graphic}
        alt={title + " graphic"}
        height={{ base: "50px", md: "90px" }}
        width={{ base: "50px", md: "90px" }}
        marginRight="20px"
      />
      <Box>
        <Text
          as="h2"
          color="brand.primary"
          fontSize={{ base: "16px", md: "32px" }}
          fontWeight="700"
        >
          {title}
        </Text>
        <Text as="h3" fontSize={{ base: "14px", md: "18px" }}>
          {subTitle}
        </Text>
      </Box>
    </GridItem>
  );
};
