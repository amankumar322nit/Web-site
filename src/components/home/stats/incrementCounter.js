import { Text, chakra, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const IncrementCounter = ({ limit, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let increment = limit / 100;
    let time = 3;
    if (count > limit - 10) {
      (time = 100), (increment = 1);
    } else if (count > limit - 50) {
      (time = 10), (increment = 1);
    } else if (count > limit - 100) {
      (time = 5), (increment = 10);
    }
    const interval = setInterval(() => {
      if (count < limit) {
        setCount((prevCount) => prevCount + increment);
      } else {
        clearInterval(interval);
      }
    }, time);
    return () => clearInterval(interval);
  }, [count, limit]);
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width={{ md: "90%" }}
      borderRight={!suffix && { base: "0", md: "solid white" }}
      borderBottom={{ base: "1px solid white", md: "0" }}
      marginBottom={{ base: "5%", md: "0" }}
    >
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        as="h1"
        color="#fff"
        whiteSpace="nowrap"
      >
        {count}
        {suffix}
        <chakra.sup
          sx={{ color: "black", fontSize: { base: "xl", md: "3xl" } }}
        >
          +
        </chakra.sup>
      </Text>
      <Box>
        <Text
          as="p"
          color="#fff"
          fontSize={{ base: "1xl", md: "1xl", lg: "2xl" }}
          whiteSpace="nowrap"
        >
          {label}
        </Text>
      </Box>
    </Box>
  );
};

export default IncrementCounter;
