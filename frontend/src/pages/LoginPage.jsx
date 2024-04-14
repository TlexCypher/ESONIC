import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Spacer,
  Text,
  VStack,
  Center
} from '@chakra-ui/react';
import axios, { HttpStatusCode } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

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


  const setSessionStorage = (authUsername) => {
    sessionStorage.setItem("authUsername", authUsername)
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
      const jwtToken = jwtDecode(res.data.token)
      setSessionStorage(jwtToken.username)
      navigate(`/${username}`)
    } else {
      console.log("Login failed.")
    }
  }

  sessionStorage.removeItem("authUsername")

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
        <Center mb="20px" fontSize={"30"} fontWeight={"bold"}>Login</Center>
        <FormControl isRequired>
          <FormLabel>
            Username
          </FormLabel>
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
          <Text
              onClick={() => {navigate("/register")}}
              textColor={"blue.400"}
              fontWeight={"bold"}
              fontSize={"xs"}
              cursor={"pointer"}
          >
            Don't you have any account?
          </Text>
        </VStack>
      </Box >
    </VStack >
  )
}

export default LoginPage
