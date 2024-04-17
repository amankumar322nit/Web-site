import React, { useEffect } from "react";
import { Box, Box as Wrapper, chakra, Text, Center } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import { BuildForList } from "@/utils/home.utils";
import Button from "@/components/hoc/Button";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const StyleBox = styled.div`
  transform: translateY(0);
  margin: 2% 0;
  opacity: 1;
  transition: 1s all ease;
  &.show {
    transform: translateY(150px);
    opacity: 0;
    position: relative;
  }
`;

const BuildFor = () => {
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
    const builds = document.querySelectorAll(".build");
    builds.forEach((build) => observer.observe(build));
    return () => observer.disconnect();
  }, []);
  return (
    <Wrapper marginY="15px">
      <Container background="#fff">
        <Box paddingY="3%" overflow="hidden">
          <Box
            color="black"
            mt="1"
            fontWeight="Bold"
            as="h1"
            marginBottom="2%"
            fontSize={{ base: "2xl", md: "4xl" }}
            noOfLines={1}
          >
            Built for
          </Box>

          {BuildForList.map((buildfor, id) => {
            const flipView = id % 2 === 0;
            return (
              <StyleBox key={id} className="build">
                <Box
                  display="flex"
                  marginBottom="2%"
                  flexDirection={{
                    base: "column-reverse",
                    md: flipView ? "row-reverse" : "row",
                  }}
                  justifyContent="space-between"
                  key={id}
                >
                  <Box width={{ base: "100%", md: "50%" }}>
                    <chakra.svg
                      as={Image}
                      src={buildfor.headingSvg}
                      alt="build-for"
                    />
                    <Box>
                      <Text
                        paddingTop="30px"
                        fontSize={{ base: "20px", md: "20px", lg: "25px" }}
                      >
                        {buildfor.headingTitile}
                      </Text>
                      <Text
                        color="black"
                        mt="1"
                        as="h1"
                        marginY="15px"
                        lineHeight={{ base: "35px", lg: "45px" }}
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                      >
                        {buildfor.heading}
                      </Text>

                      <Text
                        color="black"
                        mt="1"
                        as="p"
                        fontSize={{ base: "18px", lg: "20px" }}
                      >
                        {buildfor.paragraph}
                      </Text>
                      <Link href={buildfor.route}>
                        <Button
                          rightIcon={
                            <FontAwesomeIcon icon={faArrowRightLong} />
                          }
                          sx={{
                            marginTop: "2%",
                            backgroundColor: "#fff",
                            padding: { base: "10px 0", md: "20px 0" },
                            color: "brand.primary",
                            width: "fit-content",
                            fontSize: { base: "16px", md: "18px" },
                          }}
                        >
                          {buildfor.btn}
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                  <Box width={{ base: "100%", md: "45%" }} padding="0 4% 4% 4%">
                    <Center>
                      <chakra.svg
                        as={Image}
                        src={buildfor.rightImg}
                        zIndex={-1}
                        alt="build-for"
                        w="600px"
                        h="400px"
                      />
                    </Center>
                  </Box>
                </Box>
              </StyleBox>
            );
          })}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default BuildFor;
