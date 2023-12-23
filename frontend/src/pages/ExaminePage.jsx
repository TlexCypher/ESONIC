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

  const getCandidates = () => {
    let randomInc = Math.floor(Math.random() * selectedJpMeanings.length)
    let currentIndex = Math.floor(Math.random() * selectedJpMeanings.length)
    const usedIndex = new Set()
    const maxSize = 3
    const candidates = []
    while (usedIndex.size < maxSize) {
      if (usedIndex.has(currentIndex)) continue
      usedIndex.add(currentIndex)
      candidates.push(selectedJpMeanings[currentIndex])
      currentIndex += randomInc
      currentIndex %= selectedJpMeanings.length
    }
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
              jpMeanings={getCandidates()}
            />

          ))
        )}
      </VStack>
    </Center>
  )
}

export default ExaminePage
