import React from "react";
import {
  Box,
  Box as Wrapper,
  Text,
  chakra,
  Flex,
  Link,
} from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import hero from "src/assets/svg/mediation-publishers/hero.svg";
import Button from "@/components/hoc/Button";

const Hero = () => {
  return (
    <Wrapper background="#289CD7">
      <Box
        maxW={"1512px"}
        w="100%"
        marginX="auto"
      >
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent={{base:'flex-end', md:'space-between'}} alignItems='center'>
          <Box
            width={{ base: "100%", md: "60%", lg: "60%" }} padding={{ base: "4% 4% 0 4%", md: "0 0 10px 35px" }}>
            <Text
              fontWeight="Bold"
              as="h1"
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              lineHeight={{ base: '40px', md: '45px', lg: '55px' }}
              marginBottom='15px'
              color="#fff"
            >
              Maximize <chakra.span color="#FAC514">your revenue</chakra.span>{" "}
              from the top{" "}
              <chakra.span color="#FAC514">mediation platforms</chakra.span>
            </Text>
            <Text
              fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
              color="#fff"
            >
              Boost your top line by 40% by integrating your ironSource or
              Applovin mediation with Google AdManager without any SDK.
            </Text>
            <Link href="/get-started">
              <Button
              sx={{
                marginTop: "2%",
                backgroundColor: "#fff",
                border: "1px",
                color: "brand.primary",
              }}
            >
              Get Started
              </Button>
            </Link>
          </Box>
          <Box display='flex' justifyContent="flex-end"  width={{base:'100%',md: "70%", lg:'50%'}} >
              <chakra.svg
                marginY='5%'
                as={Image}
                src={hero}
                alt="hero"
                width={{ base: "75%", md: "85%" }}
              />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Hero;
