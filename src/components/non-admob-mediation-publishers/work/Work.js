import React, { useEffect } from "react";
import { Box as Wrapper, Box, Text, chakra, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import optimize from "src/assets/svg/mediation-publishers/optimize.svg";
import { WorkLists } from "@/utils/mediation-publishers.utils";
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

const Work = () => {
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
    const works = document.querySelectorAll(".work");
    works.forEach((work) => observer.observe(work));
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper margin="5%">
      <Container>
        <Center>
          <Text
            fontSize={{ base: "3xl", md: "4xl",lg: "5xl" }}
            marginBottom="5%"
            as='h1'
            textAlign='center'
          >
            HOW IT WORKS?
          </Text>
        </Center>
        <Box display="flex" flexDirection="row" justifyContent="space-evenly"
        gap='5%'>
          {WorkLists.map((work, id) => {
            return (
              <StyleBox key={id} className="work">
                <Box
                  key={id}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  // width="234px"
                  padding="2%"
                >
                  <Text fontWeight="bold" fontSize={{ base: '15px', md: '20px',lg:'25px' }}>{work.heading}</Text>
                  <chakra.svg as={Image} src={work.image} width="100%" alt='work'/>
                  <Text textAlign="center"
                    fontSize={{ base: '12px', md: '14px' }}>{work.para}</Text>
                </Box>
              </StyleBox>
            );
          })}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Work;
