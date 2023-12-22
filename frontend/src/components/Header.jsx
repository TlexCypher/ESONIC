import { Avatar, Button, Flex, HStack, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex bg={"purple.400"} py="10px">
      <Heading ml="20px" color={"white"}>English App</Heading>
      <Spacer />
      <HStack mr="20px">
        <Button>Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Header
