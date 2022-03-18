import { Button, Heading, Text, Divider, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import Container from '../components/Container'

export default function Custom404() {

    return (
        <Container>
            <Heading as="h1" align="center">Не найдено</Heading>
            <Text align="center">Такой странички нет</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Вернутся на главную</Button>
                </NextLink>
            </Box>
        </Container>
    )
}