import { Heading, Input, VStack, Text, Button, Box, Center } from '@chakra-ui/react';

const AddNewWordPage = () => {
  return (
    <Center mt="100px" >
      <VStack
        maxWidth={"720px"}
        borderWidth={"4px"}
        borderColor={"purple.400"}
        borderRadius={"xl"}
        padding="50px"
      >
        <Heading>
          Add New Word
        </Heading>
        <VStack mt="10px">
          <Text>日本語</Text>
          <Input placeholder='こんにちは' />
        </VStack>

        <VStack mt="10px">
          <Text>English</Text>
          <Input placeholder='hello' />
        </VStack>
        <Button
          colorScheme='purple'
          mt="10px"
        >
          Submit
        </Button>
      </VStack>
    </Center>
  )
}

export default AddNewWordPage
