import { Box, Button, FormControl, FormHelperText, FormLabel, HStack, Heading, Input, Spacer, Text, VStack } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

/* We don't know the way how to have db for each users. So, currently, there's nothing that I can do.
 * After learning this, I would work on.
 * */

const LoginPage = () => {
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
        <FormControl isRequired>
          <FormLabel>Email </FormLabel>
          <Input
            type="text"
            placeholder='sample@email'
            name="email"
          />
        </FormControl>
        <FormControl isRequired mt="20px">
          <FormLabel>Password</FormLabel>
          <Input
            type="text"
            placeholder='password'
            name="password"
          />
        </FormControl>
        <VStack>
          <Button colorScheme='purple' mt="20px" px="20px" py="5px">Login</Button>
        </VStack>
      </Box >
    </VStack >
  )
}

export default LoginPage
