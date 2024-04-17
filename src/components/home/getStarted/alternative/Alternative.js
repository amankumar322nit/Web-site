import React from "react";
import {
  Box,
  Box as Wrapper,
  chakra,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import supergirl from "src/assets/svg/supergirl.svg";

const Alternative = () => {
  return (
    <Wrapper background="#fff">
      <Container>
        <Box width={{ md: "60%" }} marginY="5%" overflow="hidden">
          <Text
            color="#289CD7"
            fontWeight="Bold"
            fontSize={{ base: "1xl", md: "2xl" }}
            paddingY="2%"
            as="h1"
          >
            WITH APPBRODA
          </Text>
          <Text
            color="black"
            fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
            paddingY="10px"
            as="h1"
          >
            Compliment your AdMob revenue with{" "}
            <chakra.span color="#289CD7">Smart Automation.</chakra.span>
          </Text>
          <Text
            color="black"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            marginBottom="10px"
          >
            Gain additional revenue boost by adding AppBroda’s demand to your ad
            network stack. Access Google’s premium AdX inventory and
            effortlessly switch between the demands. With setup, data
            aggregation and measurement of A/B tests our responsibility we
            ensure you only focus on the results.
          </Text>
          <chakra.svg as={Image} src={supergirl} alt="super-girl" />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Alternative;
