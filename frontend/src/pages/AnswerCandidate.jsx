import {Button, HStack, Text} from "@chakra-ui/react";

const AnswerCandidate = ({answer, truthAnswer, answerStatus, handleStatus, handleTryAgain}) => {
    const handleGo = () => {
        if(answer === truthAnswer) {
            handleStatus("Right !")
        } else {
            handleStatus("Incorrect...")
        }
    }
    return (
        <>
            {answerStatus === '' ? (
                <HStack>
                    <Text ml={"4px"} fontWeight={"bold"}>Your Answer: {answer}</Text>
                    <Button colorScheme={"purple"} onClick={handleGo}>Go!</Button>
                </HStack>
            ) : (
                <HStack>
                    <Text fontWeight={"bold"}>{answerStatus}</Text>
                    {answerStatus === 'Incorrect...' && (
                        <Button
                            colorScheme={"purple"}
                            onClick={handleTryAgain}
                        >
                            Try again
                        </Button>
                    )}
                </HStack>
            )}
        </>
    )
}

export default AnswerCandidate