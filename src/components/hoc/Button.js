import React from "react";
import PropTypes from "prop-types";
import { Button as ChakraButton } from "@chakra-ui/react";
import CircularLoader from "./CircularLoader";

const baseStyles = {
  m: 0,
  p: 0,
  borderRadius: "8px",
  width: {
    base: "90px",
    md: "110px",
    lg: "157px",
  },
  height: {
    base: "36px",
    md:'40px',
    lg: "49px",
  },
  border: "none",
  fontSize: {
    base: "12px",
    md: "13px",
    lg: "16px",
  },
  color: "#fff",
  backgroundColor: "brand.primary",
  _hover: {
    color: "brand.secondary",
    cursor: "pointer",
  },
  _disabled: {
    backgroundColor: "gray.200",
    color: "gray.400",
    cursor: "no-drop",
  },
  _active: {
    opacity: 0.9,
  },
  _loading: {
    backgroundColor: "brand.primary",
  },
};

const Button = (props) => {
  const { children, sx = {}, ...otherProps } = props;
  
  return (
    <ChakraButton
      spinner={<CircularLoader />}
      sx={{ ...baseStyles, ...sx }}
      {...otherProps}
    >
      {children}
    </ChakraButton>
  );
};

Button.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
};

Button.defaultProps = {
  children: "Button",
  sx: {},
};

export default Button;
