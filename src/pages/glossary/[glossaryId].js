import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box as Wrapper, Box, Text } from "@chakra-ui/react";
import { glossaryList } from "@/utils/glossary.utils";
import Container from "@/components/common/Container";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";

const Defination = () => {
  const router = useRouter();
  const query = router.query;
  const glossary = glossaryList.find(
    (glossary) => glossary.slug === query.glossaryId
  );

  useEffect(() => {
    if (!glossary) {
      router.push("/404");
    }
  }, [glossary, router]);

  return (
    <Wrapper>
      <Box background={"#EAF5FB"}>
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "6xl" }}
          padding="5%"
          textAlign="center"
        >
          {glossary?.title}
        </Text>
      </Box>
      <Container>
        <Box width={{ base: "100%", md: "70%" }} paddingY="2%">
          <Box className="ql-snow">
            <Box paddingX="0" className="ql-editor">
              {parse(glossary?.content || "")}
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Defination;
