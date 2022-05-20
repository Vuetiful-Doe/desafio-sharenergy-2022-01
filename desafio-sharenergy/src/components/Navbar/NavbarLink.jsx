import React from "react";
import { Flex } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

function NavbarLink({to, children, style}) {
  let location = useLocation();
  const isLinkActive = location.pathname == to;

  return (
    <Link  to={to} style={style}>
      <Flex
        h="100%"
        p="1em"
        align="center"
        fontWeight={600}
        className={`${isLinkActive? "active-link" : ""}`}
        fontSize="18px"
      >
        {children}
      </Flex>
    </Link>
  );
}

export default NavbarLink;
