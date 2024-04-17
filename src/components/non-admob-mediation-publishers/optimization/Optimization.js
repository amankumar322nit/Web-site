import React from "react";
import { Box as Wrapper, Text, chakra, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import optimize from "src/assets/svg/mediation-publishers/optimize.svg";

const Optimization = () => {
  return (
    <Wrapper background="#F5EBF4" paddingY="5%">
      <Container>
        <Center>
          <Text
            fontWeight="Bold"
            fontSize={{ base: "2xl", md: "3xl",lg:'4xl' }}
            textAlign="center"
            width={{ base: "90%", md: "65%" }}
            as="h1"
          >
            Optimizing revenue on ironSource and Applovin mediation
          </Text>
        </Center>
        <Center>
          <Text
            textAlign="center"
            width={{ base: "100%", md: "75%" }}
            fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
          >
            AppBroda helps publishers on mediation platforms like IronSource or
            AppLovin to optimize their ad revenue. With our data-driven
            strategies and Google AdManager demand, we optimize your demand
            stack to yield up to
            <chakra.span fontWeight="bold"> 40% higher revenue.</chakra.span>
          </Text>
        </Center>
        <Center>
          <chakra.svg
            as={Image}
            src={optimize}
            width={{ base: "100%", md: "70%" }}
            marginY="5%"
            alt="optimize"
          />
        </Center>
      </Container>
    </Wrapper>
  );
};

export default Optimization;
