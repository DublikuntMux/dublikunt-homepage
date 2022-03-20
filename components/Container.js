import React from 'react'
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { SiBlogger, SiAirplayvideo, SiAngellist, SiGithub, SiSlickpic } from "react-icons/si";
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'

const Container = ({ children }) => {
    
    const { colorMode } = useColorMode()
    const bgColor = {
        light: 'white',
        dark: '#171717'
    }
    const color = {
        light: 'black',
        dark: 'white'
    }
    const navHoverBg = {
        light: 'gray.300',
        dark: 'gray.800',
    }
    const StickyNav = styled(Flex)`
        position: sticky;
        `

    return (
        <>
            <StickyNav flexDirection="row" justifyContent="space-between" alignItems="center" maxWidth="700px"
                width="100%" bg={bgColor[colorMode]} px={[4, 0, 0]} mt={6} mb={[0, 0, 5]} mx="auto"
            >
                <Box>
                    <NextLink href="/" passHref> 
                        <Button leftIcon={<SiAirplayvideo />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                        _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Главная
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button leftIcon={<SiBlogger />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                        _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Блог
                        </Button>
                    </NextLink>
                    <NextLink href="/social" passHref>
                        <Button leftIcon={<SiAngellist />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                         _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Соц. сети
                        </Button>
                    </NextLink>
                    <NextLink href="/progect" passHref>
                        <Button leftIcon={<SiSlickpic />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                         _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Проэкты
                        </Button>
                    </NextLink>
                </Box>
            <NextLink href="https://github.com/DublikuntMux/dublikunt-homepage" passHref>
                <Button target="_blank" size="xs" leftIcon={<SiGithub />} as="a" variant='outline' p={[1, 2, 4]}
                 _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                    Sorce
                </Button>
            </NextLink>
            <DarkModeSwitch />
            </StickyNav >
            <Flex as="main" justifyContent="center" flexDirection="column" bg={bgColor[colorMode]} color={color[colorMode]} 
            px={[0, 4, 4]} mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container
