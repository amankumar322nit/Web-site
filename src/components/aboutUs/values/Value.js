import React from "react";
import { GridItem, chakra, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Value = ({ graphic, text, theme, title }) => {
  return (
    <GridItem padding="10px" maxWidth="450px">
      <Box
        position="relative"
        padding="20px"
        marginX="auto"
        display={"flex"}
        justifyContent="center"
      >
        <chakra.svg as={Image} src={graphic} alt={title + " graphic"} />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
          fontWeight="600"
          color={"#fff"}
        >
          {title}
        </Text>
      </Box>
      {text}
    </GridItem>
  );
};

export default Value;
