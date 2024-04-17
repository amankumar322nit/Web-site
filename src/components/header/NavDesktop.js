import {
  Button as ChakraButton,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { routeList } from "../../utils/route.utils";
import expand from "../../assets/svg/expand.svg";

const NavItem = ({ title, route, selectedRoute, closeMenu }) => {
  return (
    <Link href={route}>
      <MenuItem
        sx={{
          paddingX: "25px",
          background: "transparent",
          _selected: { background: "transparent" },
          _hover: { background: "transparent", color: "brand.primary" },
          _active: { background: "transparent" },
          color: selectedRoute === route ? "brand.primary" : "#000",
        }}
        onClick={closeMenu}
      >
        {title}
      </MenuItem>
    </Link>
  );
};

const NavMenu = ({ routeName, routes, selectedRoute }) => {
  const [open, setOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState(false);
  useEffect(() => {
    setSelectedChild(
      routes.find((route) => route.route === selectedRoute)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoute]);
  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);
  return (
    <Box key={routeName} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <Menu isLazy offset={routeName==='Solutions'?[-220]:[-130]} isOpen={open}>
        <MenuButton
          as={ChakraButton}
          sx={{
            background: "transparent",
            _selected: { background: "transparent" },
            _hover: { background: "transparent", color: "brand.primary" },
            _active: { background: "transparent" },
            color: selectedChild ? "brand.primary" : "#000",
            _focus: {
              //chakra ui forcefully adds its own shadow on focus, it doesn't look so good, so overriding it
              boxShadow: "none !important",
            },
            _hover: {
              borderColor: "transparent",
              outline: "transparent",
            },
            height: "60px",
          }}
          fontSize="16px"
          fontWeight={400}
          rightIcon={<Image src={expand} alt="expand-more" />}
        >
          {routeName}
        </MenuButton>
        <MenuList
          sx={{
            boxShadow: "2xl",
            _before: {
              content: '""',
              position: "absolute",
              top: 0,
              right: 5,
              width: 4,
              height: 4,
              background: "#fff",
              border: "inherit",
              borderBottom: "none",
              borderRight: "none",
              zIndex: 0,
              transform: "translateY(-50%) rotate(45deg)",
            },
          }}
        >
          {routes.map(({ route, name }) => (
            <NavItem
              key={route}
              route={route}
              title={name}
              selectedRoute={selectedRoute}
              closeMenu={closeMenu}
            />
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

const NavDesktop = ({ selectedRoute, setNav }) => {
  return (
    <HStack height='100%'>
      {routeList.map((route) => (
        <NavMenu
          key={route.name}
          routeName={route.name}
          routes={route.routes}
          selectedRoute={selectedRoute}
          setNav={setNav}
        />
      ))}
    </HStack>
  );
};

export default NavDesktop;
