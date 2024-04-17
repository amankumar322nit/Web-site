import React from "react";
import { Box, Box as Wrapper, Text, Link } from "@chakra-ui/react";
import Button from "@/components/hoc/Button";
import Container from "@/components/common/Container";
import Image from "next/image";
import { PublisherList } from "@/utils/mediation-publishers.utils";

const Publisher = () => {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "50% 50%" }}
          paddingY="5%"
        >
          <Box>
            {PublisherList.map((Publisher, id) => {
              return (
                <Box key={id} paddingBottom="8%">
                  <Box padding="5% 0">
                    <Text color="#9E3A94" as="h1" fontSize={{base:'1xl', md:'2xl'}}>
                      {Publisher.title}
                    </Text>
                    <Text
                      as="h1"
                      color="black"
                      fontWeight=" "
                      fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
                    >
                      {Publisher.heading}
                    </Text>
                    <Text as="p" fontSize={{ base: "16px", md: "18px", lg: "20px" }}>
                      {Publisher.para}
                    </Text>
                  </Box>
                    <Button
                    sx={{
                      width: { base: "80px", md: "250px" },
                      height: { base: "20px", md: "45px" },
                      fontSize: { base: "10px", md: "20px" },
                      marginTop: '5%'
                    }}
                    onClick={scrollToTop}
                    >
                      Get Started
                    </Button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Publisher;
