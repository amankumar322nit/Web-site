import {
  Box,
  Box as Wrapper,
  Heading,
  HStack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Button from "../hoc/Button";
import Container from "./Container";
import Logo from "./Logo";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import twitter from "../../assets/svg/twitter.svg";
import facebook from "../../assets/svg/facebook.svg";
import locationPin from "../../assets/svg/locationPin.svg";
import email from "../../assets/svg/email.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { extendedTheme } from "@/utils/chakra.utils";
import { footerList } from "@/utils/route.utils";

const Footer = () => {
  const router = useRouter();
  const parentRoute = router.asPath.split("/");
  const getStarted = parentRoute[1] === "get-started";
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <Wrapper
      background="#000"
      position="relative"
      paddingBottom={{ base: "100px", md: "40px" }}
    >
      <Container>
        <Box background="#000">
          {/* first section */}
          <Box
            sx={{
              textAlign: "center",
              paddingTop: "50px",
              color: "#fff",
            }}
          >
            <Heading as="h2" fontSize={{ base: "20px", md: "32px" }} mb="6px">
              What Are You Waiting For?
            </Heading>
            <Heading
              as="h5"
              fontSize={{ base: "13px", md: "20px" }}
              fontWeight="300"
              marginBottom="20px"
            >
              Take charge of your Revenue today.
            </Heading>
            {!getStarted && (
              <Link href="/get-started">
                <Button
                  width={{ base: "100px", md: "300px" }}
                  height={{ base: "25px", md: "57px" }}
                  fontSize={{ base: "12px", md: "28px" }}
                >
                  Get Started
                </Button>
              </Link>
            )}
          </Box>
          {/* second section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="20px"
          >
            {!isDesktopView && (
              <Link href="/">
                <Logo variant="dark" />
              </Link>
            )}
          </Box>
          <Box display="flex" marginTop="80px" color="#fff">
            <Box
              width="55%"
              marginLeft="3%"
              display={{ base: "none", md: "block" }}
            >
              {isDesktopView && (
                <Box mb="120px" w="fit-content">
                  <Link href="/">
                    <Logo variant="dark" />
                  </Link>
                </Box>
              )}
              <Box>
                <Heading as="h6" fontSize="16px" color="#fff" mb="10px">
                  Follow us on
                </Heading>
                <HStack width="176px" justifyContent="space-between">
                  <Link
                    href="https://www.linkedin.com/company/appbroda"
                    target="_blank"
                    rel="noreferer"
                  >
                    <Image src={linkedin} alt="linked-in" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/AppBroda"
                    target="_blank"
                    rel="noreferer"
                  >
                    <Image src={facebook} alt="facebook" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/appbroda"
                    target="_blank"
                    rel="noreferer"
                  >
                    <Image src={instagram} alt="instagram" />
                  </Link>
                  <Link
                    href="https://twitter.com/AppBroda"
                    target="_blank"
                    rel="noreferer"
                  >
                    <Image src={twitter} alt="twitter" />
                  </Link>
                </HStack>
              </Box>
            </Box>
            <Box
              alignItems={{ base: "center", md: "flex-start" }}
              display="flex"
              marginRight={{ base: 0, md: "3%" }}
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{ base: "space-between", md: "space-around" }}
              width="100%"
            >
              <Box
                width={{ base: "100%", md: "auto" }}
                marginBottom={{ base: "60px", md: "0" }}
                marginRight={{base:'0',md:'10px'}}
              >
                <Heading
                  as="h4"
                  fontSize={{ base: "14px", md: "16px" }}
                  mb={{ base: "10px", md: "25px" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Menu
                </Heading>
                <VStack
                  alignItems={{ base: "center", md: "flex-start" }}
                  fontSize={{ base: "13px", md: "16px" }}
                >
                  <Link href="/">Home</Link>
                  {footerList.Menu.map((item, id) => {
                    return (
                      <Link href={item.route} key={id}>
                        {item.name}
                      </Link>
                    );
                  })}
                </VStack>
              </Box>
              <Box
                width={{ base: "100%", md: "auto" }}
                marginBottom={{ base: "60px", md: "0" }}
              >
                <Heading
                  as="h4"
                  fontSize={{ base: "14px", md: "16px" }}
                  mb={{ base: "10px", md: "25px" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Solutions
                </Heading>
                <VStack
                  alignItems={{ base: "center", md: "flex-start" }}
                  fontSize={{ base: "13px", md: "16px" }}
                >
                  {footerList.Solutions.map((item, id) => {
                    return (
                      <Link href={item.route} key={id}>
                        {item.name}
                      </Link>
                    );
                  })}
                </VStack>
              </Box>
              <Box
                width={{ base: "100%", md: "auto" }}
                marginBottom={{ base: "40px", md: "0" }}
              >
                <Heading
                  as="h4"
                  fontSize={{ base: "14px", md: "16px" }}
                  mb={{ base: "10px", md: "25px" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Contact Us
                </Heading>
                <VStack
                  alignItems={{ base: "center", md: "flex-start" }}
                  fontSize={{ base: "13px", md: "16px" }}
                >
                  <HStack alignItems="flex-start">
                    <Image src={email} alt="email-appbroda" />
                    <Link href="mailto:publisher@appbroda.com">
                      publisher@appbroda.com
                    </Link>
                  </HStack>
                  <HStack
                    maxWidth={{ base: "200", md: "261px" }}
                    alignItems="flex-start"
                  >
                    <Image src={locationPin} alt="location" />
                    <Link
                      href="https://goo.gl/maps/GtjJx8pp3ztHcVQ5A"
                      target="_blank"
                      rel="noreferer"
                    >
                      AppBroda Tech FZCO DSO-IFZA, Dubai Silicon Oasis, Dubai,
                      UAE - 341041
                    </Link>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </Box>
          {!isDesktopView && (
            <Box>
              <Heading
                as="h6"
                fontSize={{ base: "14px", md: "16px" }}
                color="#fff"
                mb="10px"
                mx="auto"
                textAlign="center"
              >
                Follow us on
              </Heading>
              <Box
                display="flex"
                margin="0 auto"
                width="130px"
                justifyContent="space-between"
              >
                <Link
                  href="https://www.linkedin.com/company/appbroda"
                  target="_blank"
                  rel="noreferer"
                >
                  <Image
                    src={linkedin}
                    alt="linked-in"
                    style={{ height: "25px" }}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/AppBroda"
                  target="_blank"
                  rel="noreferer"
                >
                  <Image
                    src={facebook}
                    alt="facebook"
                    style={{ height: "25px" }}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/appbroda"
                  target="_blank"
                  rel="noreferer"
                >
                  <Image
                    src={instagram}
                    alt="instagram"
                    style={{ height: "25px" }}
                  />
                </Link>
                <Link
                  href="https://twitter.com/AppBroda"
                  target="_blank"
                  rel="noreferer"
                >
                  <Image
                    src={twitter}
                    alt="twitter"
                    style={{ height: "25px" }}
                  />
                </Link>
              </Box>
            </Box>
          )}
          <Box
            marginTop={{ base: "30px", md: "100px" }}
            marginX="3%"
            fontSize={{ base: "12px", md: "16px" }}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ base: "center", md: "flex-start" }}
            color="#fff"
            gap={{ base: "5", md: "0" }}
          >
            <Text>Copyright © 2023 AppBroda Tech – FZCO</Text>
            <Text>Powered by AppBroda Tech – FZCO</Text>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Footer;
