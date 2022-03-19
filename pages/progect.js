import Head from 'next/head'
import { Heading, Stack, Flex, Text, Box, useColorMode, Grid } from '@chakra-ui/react'
import Container from '../components/Container'
import ProgectPost from '../components/ProgectPost'

export default function Progect() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Head>
        <title>Progect - Dublikunt Max</title>
      </Head>
        <Heading align="center" size="xl" mb={2}>Мои проэкты</Heading>
        <Stack as="main" spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Box>
            <Text size='md' color={colorSecondary[colorMode]}> Первый раздел это ВИРУСЫ </Text>
            <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' gap={5}>
              <ProgectPost href='/images/Flopa.png' name="Flopa.exe" stars="4" status="New"/>
              <ProgectPost href='/images/Crock.png' name="Crock.exe" stars="5" status="New"/>
              <ProgectPost href='/images/adminpromt.png' name="Admin Promt" stars="2" status="New"/>
              <ProgectPost href='/images/deauther.png' name="espdeauther" stars="3" status="New"/>
            </Grid>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
