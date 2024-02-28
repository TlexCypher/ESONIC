import { Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const IndexPage = () => {
  const addNewWordNavigate = useNavigate()
  const examineNavigate = useNavigate()
  const { username } = useParams()

  const handleAddNewWord = useCallback((e) => {
    e.preventDefault()
    addNewWordNavigate(`english/addWord`)
  }, [addNewWordNavigate])

  const handleExamine = useCallback((e) => {
    e.preventDefault()
    examineNavigate(`english/examine`)
  }, [examineNavigate])

  return (
    <VStack mt="100px">
      <Heading mb="10px">Getting Started With Us!</Heading>
      <HStack>
        <Button colorScheme='purple' onClick={handleAddNewWord}>Add New Word</Button>
        <Button colorScheme='purple' onClick={handleExamine}>Examine your self</Button>
      </HStack>
    </VStack>
  )
}

export default IndexPage
