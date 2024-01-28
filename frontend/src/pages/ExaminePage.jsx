import { VStack, Heading, Select, Center, Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import WordCard from '../components/WordCard'

const ExaminePage = () => {
  const [wordCount, setWordCount] = useState("")
  const [selectedWords, setSelectedWords] = useState([])
  const [selectedJpMeanings, setSelectedJpMeanings] = useState([])

  const handleWordCount = async () => {
    const { data } = await axios.get("/english/examine/" + wordCount)
    const testData = data.testData
    const jpMeanings = []
    for (const jpAndEn of testData) {
      jpMeanings.push(jpAndEn.japaneseMeaning)
    }
    setSelectedWords(testData)
    setSelectedJpMeanings(jpMeanings)
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const getCandidates = (answerJpMeaning) => {
    const usedIndex = new Set()
    const maxSize = 3
    const candidates = []
    candidates.push(answerJpMeaning)
    while (candidates.length < maxSize) {
      const randomIndex = Math.floor(Math.random() * selectedJpMeanings.length);
      if (!usedIndex.has(randomIndex) && selectedJpMeanings[randomIndex] !== answerJpMeaning) {
        usedIndex.add(randomIndex);
        candidates.push(selectedJpMeanings[randomIndex]);
      }
    }
    shuffleArray(candidates)
    return candidates
  }

  return (
    <Center>
      <VStack mt="100px">
        <Heading mb="20px">Examine Your Self</Heading>
        <Select
          placeholder='How many words?'
          onChange={(e) => setWordCount(e.target.value)}
          value={wordCount}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value={"Full"}>Full</option>
        </Select>
        {selectedWords.length === 0 ? (
          <Button
            colorScheme='purple'
            mt="20px"
            onClick={handleWordCount}
          >
            Are you ready?
          </Button>

        ) : (
          selectedWords.map((word, index) => (
            <WordCard
              cardIndex={index}
              englishContent={word.englishContent}
              jpMeanings={getCandidates(word.japaneseMeaning)}
              truthAnswer={word.japaneseMeaning}
            />
          ))
        )}
      </VStack>
    </Center>
  )
}

export default ExaminePage
