import { Button } from '@chakra-ui/react'
import React from 'react'

const PrevButton = ({ totalLength, index, setIndex }) => {
  const handlePrev = (index) => {
    let total = +totalLength
    setIndex((index - 1 + total) % total)
  }

  return (
    <>
      <Button
        colorScheme="purple"
        onClick={() => handlePrev(index)}
      >
        Previous
      </Button>
    </>
  )
}

export default PrevButton
