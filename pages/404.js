import { useColorMode, Kbd, Button } from '@chakra-ui/react'
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
            <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                    Вернуться на Главную страницу
                    <Kbd>alt</Kbd> + <Kbd>F4</Kbd>
                </Button>
            </NextLink>
        </Container>
    )
}