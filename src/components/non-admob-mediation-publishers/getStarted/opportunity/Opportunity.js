import React, { useEffect } from "react";
import { Box, Box as Wrapper, Text, chakra, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { OpportunityList } from "@/utils/mediation-publishers.utils";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  margin: 10% 0;
  transform: translateY(0);
  opacity: 1;
  padding: 2%;
  transition: 0.5s all ease;
  &.show {
    transform: translateY(250px);
    opacity: 0;
    position: relative;
  }
`;

const Opportunity = () => {
  const observe = (entries) => {
    entries.forEach((entry, i) => {
      const intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.remove("show");
        // adding delay in transition for every entry
        entry.target.style.transition = `${600 + i * 150}ms all ease`;
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.add("show");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observe);
    const opportunities = document.querySelectorAll(".opportunity");
    opportunities.forEach((opportunity) => observer.observe(opportunity));
    return () => observer.disconnect();
  }, []);
  return (
    <Wrapper background="#F5EBF4">
      <Container>
        <Text
          as="h1"
          width={{ base: "100%", md: "50%" }}
          fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
          paddingY="5%"
        >
          All the good things you get access to.
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          width={{ base: "100%", md: "70%" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          overflow="hidden"
        >
          {OpportunityList.map((opportunity, id) => {
            return (
              <Box key={id} width={{ base: "50%", md: "40%" }} marginY="2%">
                <StyleBox className="opportunity">
                  <center>
                    <chakra.svg
                      as={Image}
                      src={opportunity.image}
                      alt={"feature"}
                      w={{ base: "120px", md: "150px" }}
                    />
                    <Text
                      as="h1"
                      wordBreak='keep-all'
                      fontSize={{ base: "15px", md: "16px", lg: "18px" }}
                    >
                      {opportunity.title}
                    </Text>
                    <Text width="80%" fontSize={{ base: "12px", md: "14px" }}>
                      {opportunity.para}
                    </Text>
                  </center>
                </StyleBox>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Opportunity;
