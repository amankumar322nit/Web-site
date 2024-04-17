import React from "react";
import { Box as Wrapper, Text, Box, useMediaQuery } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Container from "@/components/common/Container";
import { extendedTheme } from "@/utils/chakra.utils";

const SocialMedia = () => {
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <Wrapper marginY="5%">
      <Container>
        <Text
          textAlign="center"
          as="h1"
          PaddingY="10%"
          fontWeight="700"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          marginBottom={{ base: "5px", md: "10px" }}
        >
          Find us on Social Media
        </Text>
        {isDesktopView && (
          <Box display="flex" justifyContent="center" gap="10px">
            <Link
              href="https://www.linkedin.com/company/appbroda/"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#1481BA"
                width="45px"
                height="45px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ height: "30px", height: "30px", color: "#fff" }}
                />
              </Box>
            </Link>
            <Link
              href="https://www.facebook.com/AppBroda"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#3B5998"
                width="45px"
                height="45px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ height: "30px", height: "30px", color: "#fff" }}
                />
              </Box>
            </Link>
            <Link
              href="https://twitter.com/AppBroda"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#1DA1F2"
                width="45px"
                height="45px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ height: "30px", height: "30px", color: "#fff" }}
                />
              </Box>
            </Link>
            <Link
              href="https://www.instagram.com/appbroda/"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#C64444"
                width="45px"
                height="45px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ height: "30px", height: "30px", color: "#fff" }}
                />
              </Box>
            </Link>
          </Box>
        )}
        {!isDesktopView && (
          <Box display="flex" justifyContent="center" gap="5px">
            <Link
              href="https://www.linkedin.com/company/appbroda/"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#1481BA"
                width="35px"
                height="35px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ height: "20px", height: "20px", color: "#fff" }}
                />
              </Box>
            </Link>
            <Link
              href="https://www.facebook.com/AppBroda"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#3B5998"
                width="35px"
                height="35px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ height: "20px", height: "20px", color: "#fff" }}
                />
              </Box>
            </Link>
            <Link
              href="https://twitter.com/AppBroda"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#1DA1F2"
                width="35px"
                height="35px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ height: "20px", height: "20px", color: "#fff" }}
                />
              </Box>
            </Link>
            <Link
              href="https://www.instagram.com/appbroda/"
              target="_blank"
              rel="noreferer"
            >
              <Box
                background="#C64444"
                width="35px"
                height="35px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ height: "20px", height: "20px", color: "#fff" }}
                />
              </Box>
            </Link>
          </Box>
        )}
      </Container>
    </Wrapper>
  );
};

export default SocialMedia;
