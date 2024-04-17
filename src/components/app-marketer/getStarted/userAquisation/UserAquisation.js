import React, { useEffect } from "react";
import { Box, Box as Wrapper, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { UserAquisationLists } from "@/utils/app-marketer.utils";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  transform: translateY(0);
  opacity: 1;
  transition: 1s all ease;
  &.show {
    transform: translateY(150px);
    opacity: 0;
    position: relative;
  }
`;

const UserAquisation = () => {
  const observe = (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.remove("show");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.add("show");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observe);
    const userAquisitions = document.querySelectorAll(".userAquisition");
    userAquisitions.forEach((userAquisition) =>
      observer.observe(userAquisition)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "column", md: "60% 40%" }}
          paddingY="5%"
        >
          <Box>
            <Text
              as="h1"
              fontSize={{ base: "1xl", md: "2xl" }}
              color="#289CD7"
              marginTop="5%"
            >
              WHAT YOU GET
            </Text>
            <Text as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }} color="#04A44D">
              Managed user acquisition, exclusively designed for app growth
            </Text>
            {UserAquisationLists.map((benefit, id) => {
              return (
                <StyleBox className="userAquisition" key={id}>
                  <Box
                    display="flex"
                    padding="2%"
                    flexDirection={{ base: "column", md: "row" }}
                    gap="5%"
                    justifyContent="center"
                  >
                    <chakra.svg
                      as={Image}
                      src={benefit.image}
                      margin={{ base: "auto" }}
                      alt='benefit Image'
                    />
                    <Box>
                      <Text
                        fontWeight="Bold"
                        color="#04A44D"
                        fontSize={{ base: "20px", md: "2xl" }}
                      >
                        {benefit.title}
                      </Text>
                      <Text fontSize={{ base: "18px", md: "18px", lg: "20px" }}>
                        {benefit.paragraph}
                      </Text>
                    </Box>
                  </Box>
                </StyleBox>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default UserAquisation;
