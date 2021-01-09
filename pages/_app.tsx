import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Box
                maxW="900px"
                minH="100vh"
                mx="auto"
                shadow="lg"
                p="2em"
                d="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Component {...pageProps} />
            </Box>
        </ChakraProvider>
    )
}