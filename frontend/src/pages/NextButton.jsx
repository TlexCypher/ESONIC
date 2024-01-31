import { Button } from '@chakra-ui/react'
import React from 'react'

const NextButton = ({ totalLength, index, setIndex }) => {
  const handleNext = (index) => {
    let total = +totalLength
    setIndex((index + 1) % total)
  }
  return (
    <>
      <Button
        colorScheme="purple"
        onClick={() => handleNext(index)}
      >
        Next
      </Button>
    </>
  )
}

export default NextButton
