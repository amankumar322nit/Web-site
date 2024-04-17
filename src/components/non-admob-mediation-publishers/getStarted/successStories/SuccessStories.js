import React from "react";
import {
  Box,
  Box as Wrapper,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Button from "@/components/hoc/Button";

const SuccessStories = () => {
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
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY="5%"
        >
          <Box>
            <Text as="h1" color="#9E3A94" fontSize={{ base: "1xl", md: "2xl" }}>
              SUCCESS STORIES
            </Text>
            <Text
              as="h1"
              color="black"
              fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
              marginY="5%"
            >
              PocketFM increased Ad Request CPM by 90% after switching to
              AppBroda
            </Text>
            <Text as="p" fontSize={{ base: "16px", md: "18px", lg: "20px" }}>
              Our data science & ad ops specialists collaborated with the client
              and increased their revenue via superior price floor optimization,
              helping their team implement best in class optimizations and
              access higher eCPMs from new demand partners
              <br />
              Here are the results:
            </Text>
            <UnorderedList
              as="p"
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            >
              <ListItem>90% Increase In Ad request eCPM</ListItem>
              <ListItem>3X Increase in Daily Revenue</ListItem>
              <ListItem>Without any SDK Integration</ListItem>
            </UnorderedList>
            <Button
              sx={{
                width: { base: "150px", md: "250px" },
                height: { base: "30px", md: "45px" },
                fontSize: { base: "15px", md: "20px" },
                marginTop: "5%",
              }}
              onClick={scrollToTop}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default SuccessStories;
