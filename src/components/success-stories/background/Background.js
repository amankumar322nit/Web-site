import React from "react";
import { Box, Text, chakra, Box as Wrapper, Center } from "@chakra-ui/react";
import { challengeList } from "@/utils/success-stories.utils";
import Image from "next/image";
import Container from "@/components/common/Container";

const Background = () => {
  return (
    <Wrapper>
      {challengeList.map((item, id) => {
        return (
          <Box key={id} background={item.color}>
            <Container>
              <Box
                display="flex"
                flexDirection={{ base: "column", md: `${item.flexdir}` }}
                marginTop="5%"
                gap={{ base: "5%", md: "0%", lg: "5%" }}
                background={item.color}
              >
                <Box width={{ base: "100%", md: "60%" }} paddingY="5%">
                  <Text
                    as="h1"
                    fontSize={{ base: "3xl", md: "4xl", lg: "4xl" }}
                  >
                    {item.title}
                  </Text>
                  <Box
                    fontSize={{ base: "20px", md: "20px", lg: "2xl" }}
                  >
                    {item.para}
                  </Box>
                </Box>
                <Center>
                  <Box>
                    <chakra.svg as={Image} src={item.img} alt="item-image" h={ item.height } />
                  </Box>
                </Center>
              </Box>
            </Container>
          </Box>
        );
      })}
    </Wrapper>
  );
};

export default Background;
