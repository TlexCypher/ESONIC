import { Box, Button, FormControl, FormHelperText, FormLabel, HStack, Heading, Input, Spacer, Text, VStack } from '@chakra-ui/react';
import axios, { HttpStatusCode } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* We don't know the way how to have db for each users. So, currently, there's nothing that I can do.
 * After learning this, I would work on.
 * */

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password)
  }

  const handleUsername = (e) => {
    const username = e.target.value;
    setUsername(username)
  }

  const handleSubmitLoginInfo = async (e) => {
    const res = await axios.post("/auth/login", {
      username: username,
      password: password
    })
    if (res.status === HttpStatusCode.Ok) {
      console.log("Login success")
      /*TODO: Should include username into endpoint path.*/
      navigate("/")

    } else {
      console.log("Login failed.")
    }
  }

  return (
    <VStack mt="100px">
      <Box
        py="20px"
        px="100px"
        maxW={"720px"}
        borderWidth={"4px"}
        paddingX={"100px"}
        paddingY={"30px"}
        borderRadius={"xl"}
        borderColor={"purple.400"}
      >
        <Heading mb="20px">Login</Heading>
        <FormLabel isRequired>Username</FormLabel>
        <FormControl isRequired>
          <Input
            type="text"
            placeholder='sample'
            name="username"
            onChange={handleUsername}
          />
        </FormControl>
        <FormControl isRequired mt="20px">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder='password'
            name="password"
            onChange={handlePassword}
          />
        </FormControl>
        <VStack>
          <Button
            colorScheme='purple' mt="20px" px="20px" py="5px"
            onClick={handleSubmitLoginInfo}
          >
            Login
          </Button>
        </VStack>
      </Box >
    </VStack >
  )
}

export default LoginPage
