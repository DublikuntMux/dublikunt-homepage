import Head from 'next/head'
import { useColorMode, Heading, Text, Flex, Stack, Grid, Avatar, Box} from '@chakra-ui/react'
import { SiCsharp, SiC, SiCplusplus, SiDotnet, SiPython, SiGo, SiRust, SiRuby, SiJavascript} from "react-icons/si"
import { motion } from 'framer-motion'

import Container from '../components/Container'

export default function Index() {

  const MotionAvatar = motion(Avatar)
  const MotionBox = motion(Box)
  const MotionText = motion(Text)

  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  
  return (
    <Container>
      <Head>
        <title>Home - Dublikunt Max</title>
      </Head>
      <Stack justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Flex alignItems='center' gap={6}>
            <Heading align="center" size="lg" mb={2}>Всем привет я Dublikunt Max</Heading>
            <MotionAvatar whileHover={{ scale: 1.4 }}
            size='2xl' name='Dublikunt Max' src='/images/Ava.jpg' />
          </Flex>
          <MotionText initial={{ x:-500}} animate={{ x:0 }}
          color={colorSecondary[colorMode]}
          >Что я могу сказать про себя ? Да не чего ))))
          </MotionText>
        </Flex>
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" maxWidth="700px" >
          <Heading align="center" size="lg" mb={2}>Языки програмирования которые я знаю</Heading>
          <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' gap={6}>
            <MotionBox whileHover={{ scale: 1.4 }}><SiCsharp size="4em" color='#239120'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiC size="4em" color='#A8B9CC'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiCplusplus size="4em" color='#00599C'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiDotnet size="4em" color='#512BD4'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiPython size="4em" color='#3776AB'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiGo size="4em" color='#00ADD8'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiRust size="4em" color='#473005'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiRuby size="4em" color='#CC342D'/> </MotionBox>
            <MotionBox whileHover={{ scale: 1.4 }}><SiJavascript size="4em" color='#F7DF1E'/> </MotionBox>
          </Grid>
        </Flex>
      </Stack>
    </Container>
  )
}
