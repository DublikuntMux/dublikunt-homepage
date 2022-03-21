import { Button, Heading, Text, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import Container from '../components/Container'

export default function Custom500() {

    return (
        <Container>
            <Heading size="2xl" mb={2} align="center">Произошла ошибка</Heading>
            <Text align="center">У нас произошла ошибка</Text>
            <Box my={3} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Вернутся на главную</Button>
                </NextLink>
            </Box>
        </Container>
    )
}
