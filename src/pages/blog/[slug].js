import React, { useEffect } from "react";
import { Box, Heading, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import "react-quill/dist/quill.snow.css";
import { blogsList } from "@/utils/blog.utils";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const Blog = () => {
  const router = useRouter();
  const { query } = router;
  const blog = blogsList.find((blog) => blog.slug === query.slug);

  useEffect(() => {
    if (!blog && query.slug) {
      router.push("/404");
    }
  }, [blog, , router, query.slug]);

  return (
    <Box as="main">
      <Box background="#1A3049">
        <Container>
          <Heading
            as="h1"
            color="#fff"
            fontSize={{ base: "28px", md: "32px" }}
            padding="5% 0"
            textAlign="center"
          >
            {blog?.title}
          </Heading>
        </Container>
      </Box>
      <Container>
        <Box
          overflow="hidden"
          borderRadius="8px"
          marginY={"4%"}
          width={{ base: "100%", md: "70%" }}
        >
          <chakra.img
            borderRadius="8px"
            src={blog?.["feature-image"]}
            alt="feature-image"
            transition="0.7s all ease-out"
            width={"100%"}
            _hover={{
              transform: `scale(1.08)`,
            }}
          />
        </Box>
        <Box className="ql-snow">
          <Box
            paddingX="0"
            width={{ base: "100%", md: "70%" }}
            className="ql-editor"
          >
            {parse(blog?.content || "")}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
