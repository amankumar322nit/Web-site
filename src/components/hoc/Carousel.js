import React, { useRef, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@chakra-ui/react";

const defaultBtnStyles = {
  opacity: "0.3",
  backgroundColor: "transparent",
  color: "brand.primary",
  borderRadius: "999px",
  fontWeight: "900",
  position: "absolute",
  top: "40%",
};

const defaultContainerStyles = {
  position: "relative",
  overflow: "hidden",
  pointerEvents: 'none',
};

const Carousel = ({
  containerStyles = {},
  prevBtnStyles = {},
  nextBtnStyles = {},
  sliderSettings = {},
  children,
}) => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    dots: true,
    appendDots: (dots) => (
      <Box
        position={"absolute"}
        background={"transparent"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bottom="-3"
        height="30px"
        sx={{
          ".slick-active > div": {
            background: "brand.primary",
          },
          li: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          h: "4px",
          w: "24px",
          background: "#E8E8FC",
          borderRadius: "999px",
        }}
      />
    ),
  };

  return (
    <Box sx={{ ...defaultContainerStyles, ...containerStyles }}>
      <Slider {...defaultSettings} {...sliderSettings} ref={sliderRef}>
        {children}
      </Slider>
      <Box>
        <Button
          onClick={handlePrev}
          sx={{
            ...defaultBtnStyles,
            left: "0px",
            ...prevBtnStyles,
          }}
        >
          &lt;
        </Button>
        <Button
          onClick={handleNext}
          sx={{ ...defaultBtnStyles, right: "0px", ...nextBtnStyles }}
        >
          &gt;
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
