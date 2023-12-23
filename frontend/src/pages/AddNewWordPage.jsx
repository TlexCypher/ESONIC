import { Heading, Input, VStack, Text, Button, Box, Center } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

const AddNewWordPage = () => {
  const [japaneseWord, setJapaneseWord] = useState('')
  const [englishWord, setEnglishWord] = useState('')

  const handleSubmitContent = async () => {
    await axios.post("/english/addWord", {
      englishContent: englishWord,
      japaneseMeaning: japaneseWord
    })
  }

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
          <Input
            placeholder='こんにちは'
            value={japaneseWord}
            onChange={(e) => setJapaneseWord(e.target.value)}
          />
        </VStack>

        <VStack mt="10px">
          <Text>English</Text>
          <Input
            placeholder='hello'
            value={englishWord}
            onChange={(e) => setEnglishWord(e.target.value)}
          />
        </VStack>
        <Button
          colorScheme='purple'
          mt="10px"
          onClick={handleSubmitContent}
        >
          Submit
        </Button>
      </VStack>
    </Center>
  )
}

export default AddNewWordPage
