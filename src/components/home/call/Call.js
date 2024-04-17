import React from "react";
import { Box, Box as Wrapper, chakra, Text } from "@chakra-ui/react";
import Button from "@/components/hoc/Button";
import Container from "@/components/common/Container";
import Image from "next/image";
import VideoCall from "src/assets/svg/VideoCall.svg";
import Link from "next/link";

const Call = () => {
  return (
    <Wrapper top="0" margin={{ base: "10% 0 5% 0", md: "0px" }} >
      <Container>
        <Box  position='relative' display='flex' flexDirection='column-reverse' marginY='5%'>
          <Box  margin={{base:"200px 0% 4% 0%",md:"5% 0%"}} background="brand.primary" borderRadius='16px' >
            <Box
              width={{ base: '100%', md: "55%" }}
              alignItems={{ base: "center", md: "flex-start" }}
              padding={{ base: "120px 4% 4% 4%", md: '4%' }}
            >
              <Text
                color="#fff"
                mt="1"
                textAlign={{ base: "center", md: "left" }}
                as="h1"
                padding="10px 0px 10px 0px"
                fontSize={{ md: "1xl", lg: "2xl" }}
              >
                What Are You Waiting For?
              </Text>
              <Text
                as="p"
                color="#fff"
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "1xl", md: "18px", lg: "2xl" }}
              >
                Get in touch with our monetization experts to supercharge your
                app growth.
              </Text>
              <Box margin={{ base: "auto", md: "0" }} display='flex' justifyContent={{ base: "center", md: 'flex-start' }}>
                <Link href="get-started">
                  <Button
                    sx={{
                      backgroundColor: "#fff",
                      color: "brand.primary",
                      marginY: "20px",
                    }}
                  >
                    Lets Do it!
                  </Button>
                </Link>
              </Box>
            </Box>
            </Box>
            <chakra.svg
            as={Image}
            src={VideoCall}
            alt="video-call"
            position='absolute'
            marginBottom='5%'
            w={{ base: '300px', md: '350px', lg: '450px' }}
            top={{base:'5%',md:'50%'}} 
            right={{base:'50%',md:'5%'}}
            transform={{base:'translateX(50%)',md:'translateY(-50%)'}}
            />
          </Box>
      </Container>
    </Wrapper>
  );
};

export default Call;
