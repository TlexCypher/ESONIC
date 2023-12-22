import { VStack, Heading, Select, Center, Button } from '@chakra-ui/react'
import React from 'react'

const ExaminePage = () => {
  return (
    <Center>
      <VStack mt="100px">
        <Heading mb="20px">Examine Your Self</Heading>
        <Select placeholder='How many words?'>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value={"Full"}>Full</option>
        </Select>
        <Button colorScheme='purple' mt="20px">Are you ready?</Button>
      </VStack>
    </Center>
  )
}

export default ExaminePage
