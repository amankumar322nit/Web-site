import React from "react";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import { privacyPolicyList } from "@/utils/privacy-policy.utils";

const Hero = () => {
  return (
    <Box>
      <Container>
        <Box margin="5%">
          {privacyPolicyList.map((privacyPolicy, id) => {
            return (
              <Box key={id}>
                <Text
                  as="h1"
                  margin="2% 0"
                  fontSize={{ base: "18px", md: "20px"}}
                >
                  {privacyPolicy.title}
                </Text>
                <Text fontSize={{ base: "18px", md: "20px"}}>
                  {privacyPolicy.para}
                </Text>
                  {privacyPolicy.bulletPoints?.map((bulletPoint, id) => {
                    return (
                      <Box key={id} margin="1%">
                        <UnorderedList>
                          <ListItem>
                            <Text
                              fontSize={{ base: "18px", md: "20px"}}>
                              {bulletPoint}
                            </Text>
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    );
                  })}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
