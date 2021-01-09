import { useEffect, useState } from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { Divider, useMediaQuery } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import TodoForm from '../components/TodoForm'
import Task from '../components/Task'

export default function Index() {

    //Get tasks from localStorage or just start with an empty array of tasks
    if (typeof window !== 'undefined') {
        var storedTasks = JSON.parse(localStorage.getItem("taskList"))
    }
    const [taskList, setTaskList] = useState(storedTasks || [])
    //

    //Logic to render the changes on the task list
    const [taskListChanged, setTaskListChanged] = useState(false)
    useEffect(() => {
        //this effect will be called whenever there's a change to the task list, 
        //and the localStorage will always be provided by the most recent data
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }, [taskListChanged])
    //

    //Chakra-UI hooks
    const [isLargerThan950] = useMediaQuery("(min-width: 950px)")
    const { colorMode, toggleColorMode } = useColorMode()
    //
    return (
        <>
            <Button onClick={toggleColorMode} mb="2em">
                {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            </Button>
            <TodoForm 
                taskList={taskList} 
                setTaskList={setTaskList} 
                taskListChanged={taskListChanged}
                setTaskListChanged={setTaskListChanged}
            />
            <Divider
                orientation="horizontal"
                my="2em"
                w={isLargerThan950 ? '600px' : '300px'}
                sx={{
                    "@media screen and (min-width: 950px)": {
                        width: '600px'
                    },
                }}
            />
            {taskList.map((r, k) => (
                <Task
                    taskName={r}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    index={k}
                    key={k}
                    setTaskListChanged={setTaskListChanged}
                    taskListChanged={taskListChanged}
                />
            ))}
        </>
    )
}