import React, { useEffect } from "react";
import { Box, Text, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import styled from "@emotion/styled";
import Link from "next/link";
import { blogsList } from "@/utils/blog.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const StyleBox = styled.article`
  transform: translateY(0);
  opacity: 1;
  margin: 20px 0;
  &.show {
    transform: translateY(150px);
    opacity: 0;
    position: relative;
  }
`;

const BlogSec = () => {
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
    const blogs = document.querySelectorAll(".blog");
    blogs.forEach((blog, i) => {
      observer.observe(blog);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Box top="0" as="section" marginTop="10px">
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingY="20px"
        >
          <Box
            fontWeight="Bold"
            color="black"
            mt="1"
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Blogs
          </Box>

          <Box padding="2%">
            <Link href={"/blog"}>
              <Text fontWeight="bold" color="brand.primary" textAlign="center">
                See All <FontAwesomeIcon icon={faArrowRightLong} />
              </Text>
            </Link>
          </Box>
        </Box>

        <Box
          display="flex"
          gap={{ base: "0", md: "2%", lg: "5%" }}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "normal" }}
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          {blogsList.map((blog) => {
            return (
              <StyleBox className="blog" key={blog.slug}>
                <Box
                  color="brand.primary"
                  borderRadius="6px"
                  overflow="hidden"
                  maxWidth="350px"
                  width="100%"
                  height="100%"
                  boxShadow="lg"
                >
                  <Link href={`/blog/${blog.slug}`}>
                    <Box overflow="hidden" marginBottom="5%" borderRadius="6px">
                      <chakra.img
                        _hover={{
                          transform: "scale(1.1)",
                        }}
                        transition="transform .8s ease-out"
                        src={blog["feature-image"]}
                        height={{ base: "175px", md: "200px" }}
                        width="100%"
                        alt="guide"
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
              </StyleBox>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSec;
