import Container from "@/components/common/Container";
import { perksList } from "@/utils/aboutUs.utils";
import { Box, Grid, HStack, Text, chakra } from "@chakra-ui/react";
import Image from "next/image";
import groupPhoto2 from "src/assets/svg/aboutUs/groupPhoto2.svg";
import React from "react";
import Button from "@/components/hoc/Button";
import Link from "next/link";

const StyledSpan = chakra("span", {
  baseStyle: {
    color: "brand.primary",
  },
});

const StyledP = chakra(Text, {
  baseStyle: {
    fontSize:{ base: "20px", md: "20px", lg: "2xl" },
    marginBottom: "30px",
  },
});

const WorkWithUs = () => {
  return (
    <Box as="section" paddingY="5%" id='join-us'>
      <Container>
        <HStack
          alignItems="center"
          justifyContent="center"
          gap="20px"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box>
            <Text
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              marginBottom="40px"
            >
              Work With Us
            </Text>
            <StyledP>
              We are a budding startup with a team of young and passionate
              individuals set to <StyledSpan>revolutionize</StyledSpan> the
              AdTech industry.
            </StyledP>
              <StyledP>
                <StyledSpan>Innovation,</StyledSpan>{" "}
                <StyledSpan>creativity,</StyledSpan> and{" "}
                <StyledSpan>inspiration</StyledSpan> are part of our every day —
                and they could be part of yours too!
              </StyledP>
            <Link href='https://www.linkedin.com/company/appbroda/jobs/' target='_blank'>
            <Button
              sx={{
                width: { base: "150px", md: "300px" },
                fontSize: { base: "18px", md: "24px" },
              }}
            >
              Join Us
              </Button>
              </Link>
          </Box>
          <chakra.svg
            as={Image}
            src={groupPhoto2}
            alt="group-photo"
            w={{ base: "100%", lg: "600px" }}
            objectFit={"cover"}
            h={{ base: "fit-content", lg: "540px" }}
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default WorkWithUs;
