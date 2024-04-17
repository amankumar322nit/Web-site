import React from "react";
import { Box, Box as Wrapper, chakra, Text } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import line from '@/assets/svg/admobPub/line.svg'
import Image from "next/image";

const Stats = () => {
  return (
    <Wrapper background="#EAF5FB">
      <Container>
        <Box width={{ base: "100%", md: "60%" }} paddingY="5%">
          <Text fontWeight="Bold" fontSize={{ base: "2xl", md: "2xl",lg:'3xl' }} as="h1">
            Growing the
            <chakra.span color="#289CD7"> mobile app ecosystem</chakra.span>{" "}
            with
          </Text>
          <Box display="flex">
            <Box margin="5% 5% 0 0">
              <Box display='flex' flexDirection='row'>
                <Box>
              <chakra.svg
                src={line}
                as={Image}
                alt='line'
                height={{ base: "80%", md: "100%" }}
                  marginRight='20px'/>
                </Box>
              <Box>
              <Text
                fontWeight="Bold"
                fontSize={{ base: "2xl", md: "2xl",lg:'3xl' }}
                color="#289CD7"
              >
                60 Billion+
              </Text>
              <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }}>
                Ad Requests / Month
                  </Text>
                </Box>
                </Box>
            </Box>
            <Box margin="5% 5% 0 0">
              <Box display='flex' flexDirection='row'>
                <Box>
              <chakra.svg
                src={line}
                as={Image}
                alt='line'
                height={{ base: "80%", md: "100%" }}
                  marginRight='20px'/>
                </Box>
              <Box>
              <Text
                fontWeight="Bold"
                fontSize={{ base: "2xl", md: "2xl",lg:'3xl' }}
                color="#289CD7"
              >
                500+
              </Text>
              <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }}>
                Publishers
              </Text>
            </Box>
          </Box>
            </Box>
          </Box>
          <Box display="flex">
            <Box margin="5% 5% 0 0">
              <Box display='flex' flexDirection='row'>
                <Box>
              <chakra.svg
                src={line}
                as={Image}
                alt='line'
                height={{ base: "80%", md: "100%" }}
                  marginRight='20px'/>
                </Box>
              <Box>
              <Text
                fontWeight="Bold"
                fontSize={{ base: "2xl", md: "4xl" }}
                    color="#289CD7"
              >
                3000+
              </Text>
              <Text fontSize={{ base: "20px", md: "20px", lg: "2xl" }}>
                Apps Monetized
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Stats;
