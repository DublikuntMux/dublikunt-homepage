import Head from 'next/head'
import { useColorMode, Heading, Text, Flex, Stack, Grid} from '@chakra-ui/react'
import { SiCsharp, SiC, SiCplusplus, SiDotnet, SiPython, SiGo, SiRust, SiRuby, SiJavascript} from "react-icons/si";

import Container from '../components/Container'

export default function Index() {
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
      <Stack as="main" spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="1000px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Heading mb={2}>Всем привет я Dublikunt Max</Heading>
          <Text color={colorSecondary[colorMode]}>Что я могу сказать про себя ? Да не чего ))))</Text>
        </Flex>
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" maxWidth="900px" >
          <Heading mb={2}>Языки програмирования которые я знаю</Heading>
          <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' gap={6}>
          <SiCsharp size="4em" color='#239120'/> <SiC size="4em" color='#A8B9CC'/> <SiCplusplus size="4em" color='#00599C'/>
          <SiDotnet size="4em" color='#512BD4'/> <SiPython size="4em" color='#3776AB'/> <SiGo size="4em" color='#00ADD8'/>
          <SiRust size="4em" color='#473005'/> <SiRuby size="4em" color='#CC342D'/> <SiJavascript size="4em" color='#F7DF1E'/> 
          </Grid>
        </Flex>
      </Stack>
    </Container>
  )
}
