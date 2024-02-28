import { Avatar, Button, Flex, HStack, Heading, Spacer } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleSignOut = async (e) => {
    await axios.post("/auth/logout")
    navigate('login')
  }
  return (
    <Flex bg={"purple.400"} py="10px">
      <Heading ml="20px" color={"white"}>ESONIC</Heading>
      <Spacer />
      <HStack mr="20px">
        <Button onClick={handleSignOut}>Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Header
