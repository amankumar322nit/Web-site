import React from "react";
import { Box, Box as Wrapper, Text,keyframes, useMediaQuery } from "@chakra-ui/react";
import Container from "@/components/common/Container";
import Image from "next/image";
import Carousel from "@/components/hoc/Carousel";
import { extendedTheme } from "@/utils/chakra.utils";
import { BrandLogoLP } from "@/utils/home.utils";

const Brands = () => {
  const scrollAnimation = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-250%);
    }
  `;
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
                height: "650px",
                maxWidth: "600px",
                width: "100%",
              }}
              src="https://forms.zohopublic.in/bharat4/form/GetStartedMediationPublishers/formperma/BbTDXTs2njBTvHHW_9xmn6yS-nBDfIYEtLQd8oDNRuk"
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
          {!isDesktopView &&  <Carousel
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
                <Box
                  paddingX="10%"
                  key={i}
                >
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
          </Carousel>}
          {isDesktopView &&  <Carousel
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
                <Box
                  paddingX="10%"
                  key={i}
                >
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
          </Carousel>}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Brands;
