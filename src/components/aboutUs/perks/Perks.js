import Container from "@/components/common/Container";
import { perksList } from "@/utils/aboutUs.utils";
import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { Perk } from "./Perk";

const Perks = () => {
  return (
    <Box as="section" background="#EAF5FB" paddingY="5%">
      <Container>
        <Text
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          marginBottom="40px"
        >
          Perks of working with us
        </Text>
        <Grid
          templateColumns={{
            base: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={"40px 20px"}
          justifyItems="start"
          alignItems="start"
          maxW="1200px"
          marginX="auto"
        >
          {perksList.map((perk) => {
            return <Perk key={perk.id} {...perk} />;
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Perks;
