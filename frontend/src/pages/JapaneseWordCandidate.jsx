import {Button} from "@chakra-ui/react";



const JapaneseWordCandidate = ({word, handleAnswer}) => {
    const handleSelectAnswer = (word) => {
        handleAnswer(word)
    }
    return (
        <div>
            <Button
                colorScheme={"purple"}
                mb={"10px"}
                onClick={() => handleSelectAnswer(word)}
            >
                {word}
            </Button>
        </div>
    )
}

export default JapaneseWordCandidate