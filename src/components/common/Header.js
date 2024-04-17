import React,{useEffect} from "react";
import {
  HStack,
  Box,
  IconButton,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { routeList } from "@/utils/route.utils";
import Logo from "./Logo";
import hamBurger from "../../assets/svg/hamburger.svg";
import Image from "next/image";
import Button from "../hoc/Button";
import { extendedTheme } from "@/utils/chakra.utils";
import Container from "./Container";
import { useRouter } from "next/router";
import NavDesktop from "../../components/header/NavDesktop";
import NavMobile from "../header/NavMobile";
import styled from "@emotion/styled";

const StyleBox = styled.div`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  &.show {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
     transition: all 0.3s ease-in; 
  }
`;

const Header = () => {
  const router = useRouter();
  const parentRoute = router.asPath.split('/');
  const getStarted = parentRoute[1]==='get-started';
  useEffect(() => {
    let flag = 0;
    const handleScroll = () => {
      const container = document.querySelector('.container');
      if (flag != 1 && window.scrollY > 0) {
        flag = 1;
        container.classList.add('show');
      } else if (window.scrollY <= 0) {
        flag = 0;
        container.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isDesktopView] = useMediaQuery(
    `(min-width: ${extendedTheme.breakpoints.md})`
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { asPath } = useRouter();

  return (
    <StyleBox as="header" className="container">
      <Container>
        <Box position="relative" paddingY={{ base: "8px", md: '5px' }}>
          <HStack
            background="#fff"
            w="100%"
            justifyContent="space-between"
          >
            <HStack>
            <Link href='/'>
            <Logo />
              </Link>
              </HStack>
            {isDesktopView ? (
              <HStack>
                <NavDesktop selectedRoute={asPath} />
                {!getStarted &&
                  <Link href='/get-started'>
                    <Button>Get Started</Button>
                  </Link>}
              </HStack>
            ) : (
              <>
                <HStack>
                  {!getStarted &&
                  <Link href='/get-started'>
                    <Button>Get Started</Button>
                  </Link>}
                  <IconButton
                    ref={btnRef}
                    onClick={onOpen}
                    aria-label="Menu Button"
                    sx={{
                      background: "transparent",
                      _hover: { background: "transparent" },
                      _selected: { background: "transparent" },
                    }}
                    icon={<Image src={hamBurger} alt="menu" />}
                  />
                </HStack>
                <NavMobile
                  onClose={onClose}
                  isOpen={isOpen}
                  selectedRoute={asPath}
                />
              </>
            )}
          </HStack>
        </Box>
      </Container>
    </StyleBox>
  );
};

export default Header;
