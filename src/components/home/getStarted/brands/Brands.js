import React from "react";
import {
  Box,
  Box as Wrapper,
  Text,
  useMediaQuery,
  keyframes,
} from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import Carousel from "@/components/hoc/Carousel";
import { extendedTheme } from "@/utils/chakra.utils";
import { BrandLogoLP } from "@/utils/home.utils";

const Brands = () => {
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  return (
    <Wrapper>
      <Container>
        {!isDesktopView && (
          <Box className="form" zIndex="0">
            <iframe
              frameborder="0"
              style={{
                height: "850px",
                maxWidth: "600px",
                width: "100%",
              }}
              src="https://forms.zohopublic.in/bharat4/form/GetStarted/formperma/r23pB8K7qdbxzC6mHIH7lycaM_yTkuRzc_TCHz7kYWM"
            ></iframe>
          </Box>
        )}
        <Box width={{ base: "100%", md: "60%" }}>
          <Text
            color="black"
            fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
            as="h1"
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
              {BrandLogoLP.map((logo, i) => {
                return (
                  <Box paddingX="10%" key={i}>
                    <Image
                      src={logo.img}
                      alt={logo.alt}
                      style={{
                        filter: " brightness(0)",
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
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                autoplayHoverPause: false,
                pauseOnHover: false,
                pauseOnFocus: false,
              }}
              prevBtnStyles={{ display: "none" }}
              nextBtnStyles={{ display: "none" }}
            >
              {BrandLogoLP.map((logo, i) => {
                return (
                  <Box paddingX="10%" key={i}>
                    <Image
                      src={logo.img}
                      alt={logo.alt}
                      style={{
                        filter: " brightness(0)",
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
