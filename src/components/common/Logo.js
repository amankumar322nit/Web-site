import { organizationTagline } from "@/utils/logo.utils";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import appbroda_dark from "../../assets/svg/logo/appbroda_dark.svg";
import appbroda from "../../assets/svg/logo/appbroda.svg";
import appbroda_light from "../../assets/svg/logo/appbroda_light.svg";

const Logo = (props) => {
  const { variant } = props;
  return (
    <Box h='fit-content' w="fit-content" pointerEvents= 'none'>
      <HStack >
        {/* temporary placeholder logo */}
        <chakra.svg
          as={Image}
          width={{ base: "22px", md: "28px",lg:'35px' }}
          height={{ base: "22px", md: "28px",lg:'35px' }}
          src={appbroda}
          alt="appbroda-logo"
        />
          <chakra.svg
          as={Image}
          width={{ base: "100px", md: "120px",lg:'140px' }}
          height={{ base: "20px", md: "32px",lg:'38px' }}
          overflow='hidden'
          src={variant === "dark"?appbroda_light : appbroda_dark }
          alt="appbroda-logo"
        />
      </HStack>
      <Box>
        <Text
          fontSize={{ base: "8px", md: "9px",lg:'11px' }}
          textAlign="right"
          userSelect='none'
          fontFamily='Inter Font'
          color={variant === "dark" ? "#fff" : "#000"}
        >
          {organizationTagline}
        </Text>
      </Box>
    </Box>
  );
};

export default Logo;
