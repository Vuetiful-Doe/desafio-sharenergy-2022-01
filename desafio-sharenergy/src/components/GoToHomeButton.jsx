import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";

import LinkButton from "./LinkButton";

function GoToHomeButton() {
  return (
    <LinkButton
      to="/"
      mb="1em"
      role="group"
      className="default-transition-options"
      border="none"
      bg="transparent"
      display="flex"
    >
      <ArrowBackIcon
        w="6"
        h="6"
        mr=".5em"
        ml="-0.5em"
        _groupHover={{ ml: "-.35em", mr: ".75em" }}
      />
      <Text  _groupHover={{textDecoration:"underline"}}>Voltar para Home</Text>
    </LinkButton>
  );
}

export default GoToHomeButton;
