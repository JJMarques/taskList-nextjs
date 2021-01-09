import { useState } from 'react'
import {
    Box,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Alert,
    AlertIcon,
    useColorMode,
    useMediaQuery,
} from '@chakra-ui/react'

export default function TodoForm({ taskList, setTaskList, taskListChanged, setTaskListChanged }) {
    const [inputText, setInputText] = useState('') //Task input text
    const [errMsg, setErrMsg] = useState('') //Error message for input error handling

    //Chakra-UI hooks
    const [isLargerThan950] = useMediaQuery("(min-width: 950px)")
    const { colorMode } = useColorMode()
    //

    //logic for submiting a new task
    const postTask = e => {
        if (inputText === '') {
            setErrMsg('Please fill the input!')
            setTimeout(() => {
                setErrMsg('')
            }, 3000)
            setInputText('')
        } else if (inputText.length > 25) {
            setErrMsg('Please keep your tasks short!')
            setTimeout(() => {
                setErrMsg('')
            }, 3000)
            setInputText('')
        } else {
            setErrMsg('')
            setTaskList([...taskList, inputText])
            setTaskListChanged(!taskListChanged)
            setInputText('')
        }


        e.preventDefault()
    }

    return (
        <form onSubmit={postTask}>
            <Box
                w={isLargerThan950 ? '600px' : '300px'}
                sx={{
                    "@media screen and (min-width: 950px)": {
                        width: '600px'
                    },
                }}
                h="auto"
                shadow="sm"
                border="1px"
                borderColor="gray.200"
                rounded="lg"
                p="1em 2em"
                bg={colorMode === 'light' ? 'gray.50' : ''}
                color={colorMode === 'light' ? "gray.700" : ''}
                textAlign="center"
            >
                <Heading
                    as="h1"
                    size="md"
                    fontWeight="600"
                    mb="1em"
                >
                    Add a new task
                </Heading>
                <FormControl id="email" mb="1em">
                    <FormLabel>Task name</FormLabel>
                    <Input
                        type="text"
                        placeholder="Walk the dog."
                        size="md"
                        errorBorderColor={errMsg === "" ? "" : "salmon"}
                        onChange={e => setInputText(e.target.value)}
                        value={inputText}
                    />
                    {errMsg !== "" ? (
                        <Alert status="error" my="10px" rounded="md">
                            <AlertIcon />
                            {errMsg}
                        </Alert>
                    ) : <></>}
                </FormControl>
                <Button
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        </form>
    )
}