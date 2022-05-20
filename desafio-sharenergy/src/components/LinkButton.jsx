import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ to, children, ...rest }) {
  return (
    <Flex
      as={Link}
      to={to}
      borderRadius=".25em"
      p="1em"
      bg="#fff"
      border="2px solid #dcdcdc"
      alignItems="center"
      transition="all 200ms ease-in-out"
      {...rest}
    >
      {children}
    </Flex>
  );
}

export default LinkButton;
