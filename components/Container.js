import React from 'react'
import { motion } from 'framer-motion'
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { SiBlogger, SiAirplayvideo, SiAngellist, SiGithub, SiSlickpic } from "react-icons/si";
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'

const Container = ({ children }) => {

    const MotionFlex = motion(Flex)
    const MotionButton = motion(Button)
    
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
    const StickyNav = styled(MotionFlex)`
        position: sticky;
        `

    return (
        <>
            <StickyNav initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                flexDirection="row" justifyContent="space-between" alignItems="center" maxWidth="700px"
                width="100%" bg={bgColor[colorMode]} px={[4, 0, 0]} mt={6} mb={[0, 0, 5]} mx="auto"
            >
                <Box>
                    <NextLink href="/" passHref> 
                        <MotionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        leftIcon={<SiAirplayvideo />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                        _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Главная
                        </MotionButton>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <MotionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        leftIcon={<SiBlogger />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                        _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Блог
                        </MotionButton>
                    </NextLink>
                    <NextLink href="/social" passHref>
                        <MotionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        leftIcon={<SiAngellist />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                         _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Соц. сети
                        </MotionButton>
                    </NextLink>
                    <NextLink href="/progect" passHref>
                        <MotionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        leftIcon={<SiSlickpic />} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                         _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Проэкты
                        </MotionButton>
                    </NextLink>
                </Box>
            <NextLink href="https://github.com/DublikuntMux/dublikunt-homepage" passHref>
                <MotionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                target="_blank" size="xs" leftIcon={<SiGithub />} as="a" variant='outline' p={[1, 2, 4]}
                 _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                    Sorce
                </MotionButton>
            </NextLink>
            <DarkModeSwitch />
            </StickyNav >
            <MotionFlex initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            as="main" justifyContent="center" flexDirection="column" bg={bgColor[colorMode]} color={color[colorMode]} 
            px={[0, 4, 4]} mt={[4, 8, 8]}
            >
                {children}
            </MotionFlex>
        </>
    )
}

export default Container
