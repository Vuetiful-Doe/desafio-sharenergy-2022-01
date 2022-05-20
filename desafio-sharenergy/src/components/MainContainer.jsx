import { Flex } from '@chakra-ui/react'
import React from 'react'

function MainContainer({children, ...rest}) {
  return (
    <Flex
      maxWidth={1140}
      width="full"
      mt="8em"
      mb="4em"
      mx="auto"
      direction="column"
      alignItems="start"
      p="3em"
      borderRadius=".5em"
      {...rest}
    > 
    {children}
    </Flex>
  )
}

export default MainContainer