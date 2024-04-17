import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowButton = scrollTop > 150;

    setIsVisible(shouldShowButton);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <IconButton
          title="Back to top"
          position="fixed"
          cursor="pointer"
          bottom="10px"
          right="20px"
          padding="0"
          zIndex="101"
          onClick={scrollToTop}
          icon={<FontAwesomeIcon icon={faChevronUp} />}
        />
      )}
    </>
  );
};

export default BackToTop;
