import { Box } from "@chakra-ui/react";
import React from "react";

const Container = (props) => {
  const { children } = props;
  return (
    <Box
      maxW={"1512px"}
      w="100%"
      paddingX={{ base: "6%", md: "35px" }}
      marginX="auto"
    >
      {children}
    </Box>
  );
};

export default Container;
