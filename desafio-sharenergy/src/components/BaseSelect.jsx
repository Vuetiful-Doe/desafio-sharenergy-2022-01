import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

function BaseSelect({
  label,
  labelProps,
  formControlProps,
  name,
  register,
  selectProps,
  options=[] 
}) {
  return (
    <FormControl {...formControlProps}>
      {label && (
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
      )}

      <Select
        id={name}
        bg="#fff"
        {...register(name)}
        {...selectProps}
      >
        {options.map(option =>(
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </FormControl>
  );
}

export default BaseSelect;