import { Box, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'

const WordCard = ({ cardIndex, englishContent, jpMeanings }) => {

  const [englishWord, setEnglishWord] = useState('')
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    setEnglishWord(englishContent)
    setCandidates(jpMeanings)
  }, [])

  return (
    <Card width={'300px'}>
      <CardHeader>
        <Heading>Number{cardIndex + 1}</Heading>
      </CardHeader>
      <CardBody>
        <VStack>
          <Heading>{englishWord}</Heading>
          <VStack>
            <Box
              border={"gray.400"}
              borderRadius={"lg"}
            >
              {candidates.map((element) =>
                <Text>{element}</Text>
              )}
            </Box>
          </VStack>
        </VStack>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default WordCard
