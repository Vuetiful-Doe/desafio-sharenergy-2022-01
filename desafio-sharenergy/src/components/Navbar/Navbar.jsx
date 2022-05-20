import {  Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

import logo from "../../assets/logo_spacex.png";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <Flex
      width="full"
      bg="#fff"
      pos="fixed"
      top="0"
      left="0"
      height="80px"
      zIndex={5000}
      justify="center"
    >
      <HStack
        w="80%"
        maxW={1140}
        justify="space-between"
      >
        <Flex height="100%" align="center">
          <Link to="/">
            <img src={logo} height="100px" className="logo" alt="spaceflight news logo" />
          </Link>
        </Flex>
        <Flex h="100%">
          <NavbarLink style={{marginRight:".5em"}} to="/">Home</NavbarLink>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default Navbar;
