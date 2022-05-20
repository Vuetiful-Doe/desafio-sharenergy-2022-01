import { Icon, Text } from '@chakra-ui/react'
import React from 'react'

function IconText({icon,iconProps,textProps,children}) {
  return (
    <Text color="gray.600" display="flex" alignItems="center" {...textProps}>
      <Icon as={icon} {...iconProps} />
      {children}
    </Text>
  )
}

export default IconText