import React from "react";
import { Box, Text, chakra } from "@chakra-ui/react";
import { blogsList } from "@/utils/blog.utils";
import Container from "@/components/common/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <Box>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap="5%"
          marginBottom="4%"
        >
          {blogsList.map((blog, id) => {
            return (
              <Box
                color="brand.primary"
                borderRadius="6px"
                overflow="hidden"
                marginTop="5%"
                maxWidth="350px"
                width="100%"
                boxShadow="lg"
                key={id}
              >
                <Link href={`blog/${blog.slug}`}>
                  <Box overflow="hidden" marginBottom="5%" borderRadius="6px">
                    <chakra.img
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      transition="transform .8s ease-out"
                      src={blog["feature-image"]}
                      height={{ base: "175px", md: "200px" }}
                      width="100%"
                      alt="blog"
                    />
                  </Box>
                  <Box paddingX="25px">
                    <Text
                      color="black"
                      as="h1"
                      fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    >
                      {blog.title}
                    </Text>
                    <Box
                      color="black"
                      paddingY="5%"
                      fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    >
                      {blog.description}
                    </Box>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
