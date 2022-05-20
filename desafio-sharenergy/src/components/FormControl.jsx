import React, { Children } from "react";

import {
  FormControl as ChakraFormControl,
  FormLabel,
} from "@chakra-ui/react";

function FormControl({
  htmlFor,
  label,
  labelProps,
  children,
  ...formControlProps
}) {
  return (
    <ChakraFormControl mr="1em"  {...formControlProps}>
      {label && (
        <FormLabel htmlFor={htmlFor} {...labelProps}>
          {label}
        </FormLabel>
      )}
      {children}
    </ChakraFormControl>
  );
}

export default FormControl;
