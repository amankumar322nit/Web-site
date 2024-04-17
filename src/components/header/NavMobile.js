import React, { useRef, useMemo } from "react";
import {
  HStack,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Button from "../hoc/Button";
import Image from "next/image";
import { routeList } from "@/utils/route.utils";
import Link from "next/link";
import expand from "../../assets/svg/expand.svg";
import expandLess from "../../assets/svg/expandLess.svg";
import close from "../../assets/svg/close.svg";

const NavMobile = ({ isOpen, onClose, selectedRoute }) => {
  const btnRef = useRef();
  const routes = selectedRoute.split('/');
  const getStarted = routes[1] === 'get-started';
  const defaultOpenIndex = useMemo(() => {
    let openIndex;
    routeList.forEach((route, index) => {
      route.routes.forEach((route) => {
        if (route.route === selectedRoute) {
          openIndex = index;
        }
      });
    });
    return openIndex;
  }, [selectedRoute]);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          height="479px"
          maxWidth="250px"
          marginTop={"10px"}
          paddingRight="2%"
        >
          <HStack justifyContent="flex-end">
            <IconButton
              w="fit-content"
              sx={{
                background: "transparent",
                _hover: { background: "transparent" },
                _selected: { background: "transparent" },
              }}
              onClick={onClose}
              icon={<Image src={close} alt="close" />}
            />
          </HStack>
          <DrawerBody paddingLeft="24px" paddingRight="0">
            <Accordion allowToggle defaultIndex={defaultOpenIndex}>
              {routeList.map((route, index) => {
                return (
                  <AccordionItem
                    border="none"
                    padding="10px 0"
                    key={route.name}
                  >
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton padding={0}>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            color={
                              defaultOpenIndex === index
                                ? "brand.primary"
                                : "#000"
                            }
                          >
                            {route.name}
                          </Box>
                          {isExpanded ? (
                            <Image src={expandLess} alt="expand-less" />
                          ) : (
                            <Image src={expand} alt="expand-more" />
                          )}
                        </AccordionButton>
                        <AccordionPanel>
                          <UnorderedList listStyleType="none">
                            {route.routes.map(({ name, route }) => {
                              return (
                                <Link key={route} href={route}>
                                  <ListItem
                                    onClick={onClose}
                                    sx={{
                                      padding: "4px 10px",
                                      background: "transparent",
                                      _selected: { background: "transparent" },
                                      _hover: {
                                        background: "transparent",
                                        color: "brand.primary",
                                      },
                                      _active: { background: "transparent" },
                                      paddingX: "0",
                                      color:
                                        selectedRoute === route
                                          ? "brand.primary"
                                          : "#000",
                                    }}
                                  >
                                    {name}
                                  </ListItem>
                                </Link>
                              );
                            })}
                          </UnorderedList>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
            <HStack alignItems="center" justifyContent="center">
              {!getStarted && 
              <Link href='/get-started'>
              <Button
                sx={{
                  width: "150px",
                  height: "36px",
                  fontSize: "13px",
                  marginTop: "20px",
                  }}
                onClick={onClose}
              >
                Get Started
                </Button>
                  </Link>}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
