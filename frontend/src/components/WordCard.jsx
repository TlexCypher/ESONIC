import { Box, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import JapaneseWordCandidate from "../pages/JapaneseWordCandidate.jsx";
import AnswerCandidate from "../pages/AnswerCandidate.jsx";
import NoCandidate from "../pages/NoCandidate.jsx";

const WordCard = ({ cardIndex, englishContent, jpMeanings, truthAnswer }) => {
    const [answer, setAnswer] = useState('')
    const [englishWord, setEnglishWord] = useState('')
    const [candidates, setCandidates] = useState([])
    const [answerStatus, setAnswerStatus] = useState('')

  useEffect(() => {
    setEnglishWord(englishContent)
    setCandidates(jpMeanings)
  }, [])
    const handleSelectAnswer = (word) => {
        setAnswer(word)
    }
    const handleTryAgain = () => {
        // setEnglishWord('')
        setAnswer('')
        setAnswerStatus('')
    }

  return (
    <Card width={'300px'}>
      <CardHeader>
        <Heading size={'lg'} color={'purple.400'} >Number{cardIndex + 1}</Heading>
      </CardHeader>
      <CardBody>
        <VStack>
          <Heading mt={"-30px"}>{englishWord}</Heading>
          <VStack>
            <Box
              border={"gray.400"}
              borderRadius={"lg"}
            >
              {candidates.map((element) =>
                  <JapaneseWordCandidate
                      word={element}
                      handleAnswer={handleSelectAnswer}
                  />
              )}
            </Box>
          </VStack>
        </VStack>
      </CardBody>
      <CardFooter>
          {answer === '' ? (
              <NoCandidate/>
          ) : (
              <AnswerCandidate
                  answer={answer}
                  truthAnswer={truthAnswer}
                  answerStatus={answerStatus}
                  handleStatus={setAnswerStatus}
                  handleTryAgain={handleTryAgain}
              />
          )}
      </CardFooter>
    </Card>
  )
}

export default WordCard
