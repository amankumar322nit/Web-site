import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "@chakra-ui/react";

const CircularLoader = (props) => {
  const { style, ...otherProps } = props;
  return (
    <Spinner
      speed="0.8s"
      size={{ base: "sm", md: "md" }}
      sx={{ color: "#fff", ...style }}
      {...otherProps}
    />
  );
};

CircularLoader.propTypes = {
  style: PropTypes.object,
};

CircularLoader.defaultProps = {
  style: {},
};
export default CircularLoader;
