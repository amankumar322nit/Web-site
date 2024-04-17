import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import { glossaryList } from "@/utils/glossary.utils";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Box display="flex" flexDirection="column" padding="5%">
          {glossaryList.map((glossary) => {
            return (
              <Link
                key={glossary.slug}
                href={{
                  pathname: `/glossary/${glossary.slug}`,
                }}
              >
                <Box padding="20px">
                  <Text as="h1">{glossary.title}</Text>
                  <Text>{glossary.description}</Text>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
