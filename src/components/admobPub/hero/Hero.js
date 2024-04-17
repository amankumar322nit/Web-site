import React from "react";
import { Box, Box as Wrapper, Text, chakra, Divider,Link } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import Button from "@/components/hoc/Button";
import hero from "@/assets/svg/admobPub/hero.svg";

const Hero = () => {
  return (
    <Wrapper background="#289CD7">
      <Box
        maxW={"1512px"}
        w="100%"
        marginX="auto"
      >
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent={{base:'flex-end', md:'space-between'}} alignItems='center'>
          <Box width={{ base: "100%", md: "50%", lg: "60%" }} padding={{ base: "4% 4% 0 4%", md: "0 0 10px 35px" }}>
            <Text
              as="h1"
              fontWeight="Bold"
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              color="#fff"
              lineHeight={{ base: '40px',md:'45px',lg:'55px' }}
              marginBottom='15px'
            >
              Take the Leap and <chakra.span color="#FAC514">Skyrocket</chakra.span>{" "}
              Your{" "}
              <chakra.span color="#FAC514">AdMob Revenue</chakra.span>
              {" "} Today!
            </Text>
            <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }} color="#fff">
              Has your ad revenue plateaued?</Text> <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }} color="#fff">
              Do you wish to further increase your eCPM?</Text> <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }} color="#fff">
              Brace yourself
              for a game-changing solution: Appbroda&apos;s cutting-edge automation tool,
              the ultimate catalyst to unlock new possibilities and skyrocket your ad revenue!
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
          <Box display='flex' justifyContent="flex-end"  width={{base:'100%',md: "50%", lg:'40%'}}>
              <chakra.svg
                marginTop={{ base: "0", md: "2%" }}
                as={Image}
                src={hero}
                alt={"Hero Icon"}
                width={{base:'75%',md: "100%"}}
              />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Hero;
