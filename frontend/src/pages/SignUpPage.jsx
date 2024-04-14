import {Box, Button, FormControl, FormLabel, Heading, Input, Text, VStack} from '@chakra-ui/react'
import axios, { HttpStatusCode } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {jwtDecode} from "jwt-decode";

const SignUpPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  }

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  }

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  }

  const setSessionStorage = (authUsername) => {
    sessionStorage.setItem("authUsername", authUsername)
  }

  const handleSubmitSignUpInfo = async () => {
    /*push user info into db. */
    const res = await axios.post("/auth/register", {
      username: username,
      email: email,
      password: password
    });

    if (res.status === HttpStatusCode.Ok) {
      console.log("Registration success.")
      const jwtToken = jwtDecode(res.data.token)
      setSessionStorage(jwtToken.username)
      navigate(`/${username}`)
    } else {
      console.log("Registration failed.")
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
        <Heading mb="20px">SignUp</Heading>
        <FormLabel isRequired>Username</FormLabel>
        <FormControl isRequired>
          <Input
            type="text"
            placeholder='sample'
            name="username"
            onChange={handleUsername}
          />
        </FormControl>
        <FormLabel isRequired mt="20px">Email</FormLabel>
        <FormControl isRequired>
          <Input
            type="email"
            placeholder='sample@sample.com'
            name="email"
            onChange={handleEmail}
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
            onClick={handleSubmitSignUpInfo}
          >
            SignUp
          </Button>
          <Text
              onClick={() => {navigate("/login")}}
              textColor={"blue.400"}
              fontWeight={"bold"}
              fontSize={"xs"}
              cursor={"pointer"}
          >
            Have you registered?
          </Text>
        </VStack>
      </Box >
    </VStack >

  )
}

export default SignUpPage
