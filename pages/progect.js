import Head from 'next/head'
import { Heading, Stack, Flex, Box, Grid } from '@chakra-ui/react'
import Container from '../components/Container'
import ProgectPost from '../components/ProgectPost'

export default function Progect() {
  return (
    <Container>
      <Head>
        <title>Progect - Dublikunt Max</title>
      </Head>
        <Heading align="center" size="xl" mb={2}>Мои проэкты</Heading>
        <Stack as="main" spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Box>
            <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' gap={5}>
              <ProgectPost href='https://github.com/DublikuntMux/Flopa' img='/images/Flopa.png' name="Flopa.exe" stars="4" status="New"/>
              <ProgectPost href='https://github.com/DublikuntMux/Crock' img='/images/Crock.png' name="Crock.exe" stars="5" status="New"/>
              <ProgectPost href='https://github.com/DublikuntMux/AdminPromtSpawn' img='/images/adminpromt.png' name="Admin Promt" stars="2" status="New"/>
              <ProgectPost href='https://github.com/DublikuntMux/espdeauther' img='/images/deauther.png' name="espdeauther" stars="3" status="New"/>
            </Grid>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
