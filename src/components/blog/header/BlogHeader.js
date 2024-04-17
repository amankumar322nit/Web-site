import React from "react";
import { Text, Box, chakra, Button } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import { blogsList, blogBtn } from "@/utils/blog.utils";
import Carousel from "@/components/hoc/Carousel";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <Box background="linear-gradient(to bottom, #EAF5FB 60%, white 0%)">
      <Container>
        <Text
          as="h1"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          paddingTop="3%"
          textAlign="center"
        >
          OUR BLOGS
        </Text>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          gap="5%"
          alignItems="center"
        >
          {/* {blogBtn.map((btn, i) => {
            return (
              <Button
                key={i}
                border="1px solid blue"
                color="brand.primary"
                w="fit-content"
                marginY="1%"
              >
                {btn}
              </Button>
            );
          })} */}
        </Box>
        <Carousel sliderSettings={{ autoplaySpeed: 3000 }} containerStyles={{pointerEvents: 'auto'}}>
          {blogsList.map((blog, id) => {
            return (
              <Box key={id}>
                <Box
                  padding={{ base: "2.5%", md: "0" }}
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                  margin={{ base: "3% auto", md: "5% 5%" }}
                  maxWidth={{ base: "500px", md: "100%" }}
                  boxShadow="lg"
                  background="white"
                  borderRadius="16px"
                  position="relative"
                >
                  <Box
                    width={{ base: "100%", md: "50%" }}
                    padding={{ base: "2%" }}
                  >
                    <Link href={`/blog/${blog.slug}`}>
                      <Text
                        as="h1"
                        fontSize={{ base: "l", md: "2xl" }}
                        marginBottom="20px"
                        width="100%"
                      >
                        {blog.title}
                      </Text>
                    </Link>
                    <Text
                      fontSize={{
                        base: "md",
                        md: "1xl",
                      }}
                    >
                      {blog.description}
                    </Text>
                  </Box>
                  <Box
                    width={{ base: "100%", md: "50%" }}
                    margin="auto"
                    padding="2%"
                  >
                    <chakra.img
                      borderRadius="8px"
                      loading="lazy"
                      height={{ base: "180px", md: "250px" }}
                      width="100%"
                      src={blog["feature-image"]}
                      alt="blog-card"
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Carousel>
      </Container>
    </Box>
  );
};

export default BlogHeader;
