import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import { valuesList } from "@/utils/aboutUs.utils";
import Value from "./Value";
import Container from "@/components/common/Container";

const Values = () => {
  return (
    <Box as="section" background="#fff" paddingY="5%">
      <Container>
        <Text as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          Our Values
        </Text>
        <Grid
          templateColumns={{ md: "1fr", lg: "1fr 1fr" }}
          gap={"40px"}
          justifyItems="center"
          alignItems="start"
          maxWidth="1100px"
          marginX="auto"
        >
          {valuesList.map((value) => {
            return <Value key={value.id} {...value} />;
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Values;
