import React from "react";
import { Box, Box as Wrapper, Text, useMediaQuery } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import Carousel from "@/components/hoc/Carousel";
import { extendedTheme } from "@/utils/chakra.utils";
import { BrandsLogoHP } from "@/utils/home.utils";

const Brands = () => {
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <Wrapper background="brand.primary">
      <Container>
        <Box
          paddingTop={{ base: "0%", md: "17%", lg: "115px" }}
          paddingBottom="2%"
        >
          <Text
            as="h1"
            color="#fff"
            fontSize={{ base: "l", sm: "2xl", lg: "3xl" }}
            textAlign="center"
            mb={{ base: "4%", sm: "0" }}
            paddingTop="4%"
          >
            Empowering Businesses Around The World
          </Text>
          {!isDesktopView && (
            <Carousel
              sliderSettings={{
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                autoplayHoverPause: false,
                pauseOnHover: false,
                pauseOnFocus: false,
              }}
              prevBtnStyles={{ display: "none" }}
              nextBtnStyles={{ display: "none" }}
            >
              {BrandsLogoHP.map((logo, i) => {
                return (
                  <Box paddingX="10%" key={i}>
                    <Image
                      src={logo.img}
                      alt={logo.alt}
                      style={{
                        filter: " brightness(0) invert(1)",
                        aspectRatio: "3/2",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                );
              })}
            </Carousel>
          )}
          {isDesktopView && (
            <Carousel
              sliderSettings={{
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                autoplayHoverPause: false,
                pauseOnHover: false,
                pauseOnFocus: false,
              }}
              prevBtnStyles={{ display: "none" }}
              nextBtnStyles={{ display: "none" }}
            >
              {BrandsLogoHP.map((logo, i) => {
                return (
                  <Box paddingX="10%" key={i}>
                    <Image
                      src={logo.img}
                      alt={logo.alt}
                      style={{
                        filter: " brightness(0) invert(1)",
                        aspectRatio: "3/2",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                );
              })}
            </Carousel>
          )}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Brands;
