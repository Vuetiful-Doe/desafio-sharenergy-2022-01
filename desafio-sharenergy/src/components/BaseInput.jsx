import React from "react";
import { FormControl, Input, FormLabel } from "@chakra-ui/react";

function BaseInput({
  label,
  labelProps,
  formControlProps,
  name,
  register,
  inputProps,
}) {
  return (
    <FormControl {...formControlProps}>
      {label && (
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
      )}
      <Input
        id={name}
        bg="#fff"
        height="auto"
        p=".75em"
        {...register(name)}
        {...inputProps}
      />
    </FormControl>
  );
}

export default BaseInput;
