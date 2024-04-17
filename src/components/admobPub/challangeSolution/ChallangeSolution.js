import React, { useEffect } from "react";
import { Box, Box as Wrapper, Text, chakra, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import { ChallengesList, SolutionList } from "@/utils/AdmobPub.utils";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  transform: translateY(0);
  opacity: 1;
  padding: 2%;
  transition: 1s all ease;
  &.show {
    transform: translateY(150px);
    opacity: 0;
    position: relative;
  }
`;

const ChallangeSolution = () => {
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
    const challengeSolutions = document.querySelectorAll(".challengeSolution");
    challengeSolutions.forEach((challengeSolution) =>
      observer.observe(challengeSolution)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Box>
          <Text
            fontSize={{ base: "3xl", md: "4xl",lg: "5xl" }}
            marginTop="3%"
            as="h1"
            textAlign='center'
          >
            YOUR CHALLENGES
          </Text>
          <Box display="flex" flexWrap="wrap" justifyContent={{base:'center',  md: "center",lg: "space-around" }} gap='2%' >
            {ChallengesList.map((challenge, id) => {
              return (
                <StyleBox key={id} className="challengeSolution">
                  <Box width="120px" height="150px">
                    <chakra.svg
                      as={Image}
                      alt={'challenge'}
                      src={challenge.image}
                      width="150px"
                      height="150px"
                    />
                  </Box>
                  <Center>
                    <Text width="130px" fontSize={{ base: '12px', md: '14px' }} textAlign="center">
                      {challenge.para}
                    </Text>
                  </Center>
                </StyleBox>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "3xl", md: "4xl",lg: "5xl" }}
            marginTop="3%"
            as="h1"
            textAlign='center'
          >
            OUR SOLUTIONS
          </Text>
          <Box display="flex" flexWrap="wrap" justifyContent={{base:'center',  md: "center",lg: "space-around" }} gap='2%' >
            {SolutionList.map((solution, id) => {
              return (
                <StyleBox key={id} className="challengeSolution">
                  <Box width="120px" height="150px">
                    <chakra.svg
                      as={Image}
                      alt={'solution'}
                      src={solution.image}
                      width="150px"
                      height="150px"
                    />
                  </Box>
                  <Center>
                    <Text width="130px" fontSize={{ base: '12px', md: '14px' }} textAlign="center">
                      {solution.para}
                    </Text>
                  </Center>
                </StyleBox>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ChallangeSolution;
