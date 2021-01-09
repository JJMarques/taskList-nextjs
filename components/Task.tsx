import {
    Box,
    Heading,
    Button,
    useColorMode,
    useMediaQuery
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

export default function Task({ taskName, taskList, setTaskList, index, setTaskListChanged, taskListChanged }) {

    //Chakra-UI hooks
    const [isLargerThan950] = useMediaQuery("(min-width: 950px)")
    const { colorMode } = useColorMode()
    //
    return (
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
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="1em"
        >
            <Heading
                size="sm"
                fontWeight="600"
            >
                {taskName}
            </Heading>
            <Button
                colorScheme="red"
                onClick={() => {
                    taskList.splice(index, 1)
                    setTaskList(taskList)
                    setTaskListChanged(!taskListChanged)
                }}
            >
                <DeleteIcon />
            </Button>
        </Box>
    )
}