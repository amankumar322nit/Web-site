import React from "react";
import { Box, Box as Wrapper, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import linkedinhover from '@/assets/svg/linkedinhover.svg';
import { FounderCards } from "@/utils/home.utils";
import Link from "next/link";

const Founders = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Box
            paddingTop="5%"
            color="black"
            mt="1"
            as="h2"
            textAlign="center"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Meet Our Founders
          </Box>
          <Box
            alignItems={{ base: "center", md: "normal" }}
            display="flex"
            margin="2% 0"
            gap="10px"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="center"
          >
            {FounderCards.map((founder, id) => {
              return (
                <Box
                  width="100%"
                  minHeight="100%"
                  key={id}
                  color="brand.primary"
                  border="1px"
                  zIndex="0"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  overflow="hidden"
                  borderRadius="16px"
                  maxWidth="420px"
                  margin="2%"
                >
                  <Box>
                    <Text
                      color="black"
                      paddingTop="5%"
                      fontWeight="Bold"
                      as="h2"
                      fontSize={{ base: "2xl", md: "3xl" }}
                      textAlign="center"
                    >
                      {founder.name}
                    </Text>
                    <Text textAlign="center">{founder.designation}</Text>
                    <Box height="50%">
                      <Text
                        color="black"
                        mt="1"
                        as="p"
                        padding="5%"
                        fontSize="1xl"
                        textAlign="center"
                      >
                        {founder.about}
                      </Text>
                    </Box>
                  </Box>
                  <Box position="relative" paddingTop="35px" bottom="0">
                    <Link href={founder.linkdin} target='_blank' rel="noopener">
                    <Box  _hover={{
                      ".founder": {
                         filter: 'blur(1px)'
                          },
                      ".overlay": {
                        opacity: '0.8',
                        transform: "scale(1.1)"
                      }
                    }}>
                      <chakra.svg
                        as={Image}
                        src={founder.pic}
                        zIndex="100"
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        margin="auto"
                        w="35%"
                        alt="founder-pic"
                        className='founder'
                      />
                      <chakra.svg
                        as={Image}
                        src={linkedinhover}
                        zIndex="100"
                        opacity='0'
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom='6'
                        transition="transform .8s ease-out"
                        margin="auto"
                        w="30%"
                        alt="founder-pic"
                        className='overlay'
                        />
                        
                      </Box>
                      </Link>
                    <chakra.svg
                      as={Image}
                      src={founder.backgroundImg}
                      zIndex="-1"
                      alt="founder"
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Founders;
