import React, { useState, useEffect } from "react";
import { Box, Box as Wrapper } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import IncrementCounter from "./incrementCounter";

const Stats = () => {
  const [increment, setIncrement] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        if (intersecting && !increment) {
          setTimeout(() => setIncrement(true), 200);
        }
      });
    });
    observer.observe(document.getElementById("stats"));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper top="0" marginTop="10px" background="#289CD7">
      <Container>
        <Box padding="7% 0">
          <center>
            <Box
              color="#fff"
              mt="1"
              as="p"
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              IMPACTING APP PUBLISHERS GLOBALLY​
            </Box>
            <Box
              color="#fff"
              mt="1"
              fontWeight="Bold"
              as="h1"
              fontSize={{ base: "xl", md: "4xl" }}
            >
              Empowering the mobile app ecosystem with
            </Box>
            <div id="stats">
              <Box
                alignItems={{ base: "center", md: "normal" }}
                display="flex"
                marginTop="5%"
                flexDirection={{ base: "column", md: "row" }}
                justifyContent='space-evenly'
                width="100%"
              >
                <IncrementCounter
                  limit={increment ? 500 : 0}
                  label={"App Publisher"}
                />
                <IncrementCounter
                  limit={increment ? 3000 : 0}
                  label={"App Monetized"}
                />
                <IncrementCounter
                  limit={increment ? 60 : 0}
                  suffix={"Billion"}
                  label={"Ad Requests / Month"}
                />
              </Box>
            </div>
          </center>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Stats;
