import React from "react";
import { Box, Box as Wrapper, Text, chakra,Flex,Link } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import Button from "@/components/hoc/Button";
import hero from "src/assets/svg/app-marketer/hero.svg";

const Hero = () => {
  return (
    <Wrapper background="#04A44D">
      <Box
        maxW={"1512px"}
        w="100%"
        marginX="auto"
      >
        <Box display="flex" flexDirection={{ base: "column", md: "row" }}  justifyContent={{base:'flex-end', md:'space-between'}} alignItems='center'>
          <Box width={{ base: "100%", md: "50%", lg: "60%" }} padding={{ base: "4% 4% 0 4%", md: "0 0 10px 35px" }} >
            <Text
              fontWeight="Bold"
              as="h1"
              fontSize={{ base: "4xl", md: "4xl",lg: "5xl" }}
              color="#fff"
              lineHeight={{ base: '40px',md:'45px',lg:'55px' }}
              
            >
              <chakra.span color="#FAC514">Profitably grow</chakra.span> your
              app with the{" "}
              <chakra.span color="#FAC514">right users</chakra.span>
            </Text>
            <Text
              color="#fff"
              fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
            >
              Let a professional optimize your user acquisition campaign to
              achieve the desired results with a positive ROI. Our ad campaign
              and ASO specialists grow your app with the right users.
            </Text>
            <Link href='/get-started'>
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
          <Box display='flex' justifyContent="flex-end"  width={{base:'100%',md: "70%", lg:'35%'}} >
            <chakra.svg
              as={Image}
              src={hero}
              alt="hero-icon"
              marginTop={{ base: '0', md: '5%' }}
              width={{base:'75%',md: "100%"}}
              />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Hero;
