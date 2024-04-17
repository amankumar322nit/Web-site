import Container from "@/components/common/Container";
import { Box, HStack, Text, useMediaQuery } from "@chakra-ui/react";
import { extendedTheme } from "@/utils/chakra.utils";
import React from "react";

const GetStarted = () => {
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <Box as="section" bg="#fff" paddingBottom="60px">
      <Container>
        <HStack
          justifyContent={"space-between"}
          alignItems={{ base: "center", lg: "flex-start" }}
          flexDirection={{ base: "column", lg: "row" }}
          paddingY={{ base: "1%", lg: "5%" }}
        >
          {isDesktopView && (
            <Box
              padding={{ base: "20px 0", lg: "5% 0 0 0" }}
              zIndex="3"
              width="100%"
              maxW="628px"
            >
              <Text
                as="h1"
                fontWeight="700"
                marginBottom="40px"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              >
                Get Started With AppBroda Today
              </Text>
              <Text
                fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
                marginBottom={{ base: "40px", lg: "0" }}
              >
                AppBroda is more than an Adtech Platform. We are a go-to place
                for publishers. Setup a free demo to know more!
              </Text>
            </Box>
          )}
          <Box
            borderRadius="10px"
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <iframe
              frameborder="0"
              style={{
                height: "800px",
                width: "100%",
                maxWidth: "600px",
                border: "none",
              }}
              src="https://forms.zohopublic.in/bharat4/form/ContactUs/formperma/Fw-4X0iJm0Uc0XRCf-c5zq4yDJgYMUGhv_hCIPedu4o"
            ></iframe>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default GetStarted;
