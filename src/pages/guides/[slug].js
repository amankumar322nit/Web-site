import React, { useEffect } from "react";
import { Box, Heading, chakra } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { guideList } from "@/utils/guides.utils";

const Blog = () => {
  const router = useRouter();
  const { query } = router;
  const guide = guideList.find((guide) => guide.slug === query.slug);

  useEffect(() => {
    if (!guide) {
      router.push("/404");
    }
  }, [guide, router]);

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
            {guide?.title}
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
            src={guide?.["feature-image"]}
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
            {parse(guide?.content || "")}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
