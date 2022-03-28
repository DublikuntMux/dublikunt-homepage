import { Button, Heading, Text, Box, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

import Container from '../components/Container'

export default function Custom404() {

	const { colorMode } = useColorMode()
	const navHoverBg = {
        light: 'gray.300',
        dark: 'gray.800',
    }

    return (
        <Container>
            <Heading size="2xl" mb={2} align="center">Не найдено</Heading>
            <Text align="center">Такой странички нет</Text>
            <Box my={3} align="center">
                <NextLink href="/" passHref>
                    <Button size='xl' variant='outline' p={[1, 2, 4]} 
                    _hover={{ backgroundColor: navHoverBg[colorMode] }}>
						Вернутся на главную
					</Button>
                </NextLink>
            </Box>
        </Container>
    )
}
