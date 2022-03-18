import Head from 'next/head'
import { useColorMode, Heading, Text, Flex, Stack, Button } from '@chakra-ui/react'

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
      <Stack as="main" spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Heading mb={2}>Всем привет я Dublikunt Max</Heading>
          <Text color={colorSecondary[colorMode]}>Что я могу сказать про себя ? да не чего ))))</Text>
          <Button data-splitbee-event="Button Click" data-splitbee-event-type="Resume">Покозать резюмэ</Button>
        </Flex>
      </Stack>
    </Container>
  )
}
