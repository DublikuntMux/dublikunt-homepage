import Head from 'next/head'
import { Heading, Stack, Flex, Grid } from '@chakra-ui/react'
import Container from '../components/Container'
import ProgectPost from '../components/ProgectPost'

export default function Progect() {

  return (
    <Container>
      <Head>
        <title>Progect - Dublikunt Max</title>
      </Head>
      <Heading align="center" size="2xl" mb={2}>Мои проэкты</Heading>
      <Stack justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' gap={4}>
          <ProgectPost href='https://github.com/DublikuntMux/dublikunt-homepage' img='/images/Site.jpg' 
              name="Этот сайт" stars="5" status="New"/>
            <ProgectPost href='https://github.com/DublikuntMux/Flopa' img='/images/Flopa.jpg' 
              name="Flopa.exe" stars="4" status="New"/>
            <ProgectPost href='https://github.com/DublikuntMux/AdminPromtSpawn' img='/images/adminpromt.jpg' 
              name="Admin Promt" stars="2" status="New"/>
            <ProgectPost href='https://github.com/DublikuntMux/Crock' img='/images/Crock.jpg' 
              name="Crock.exe" stars="5" status=""/>
            <ProgectPost href='https://github.com/DublikuntMux/espdeauther' img='/images/deauther.jpg' 
              name="espdeauther" stars="5" status=""/>
          </Grid>
        </Flex>
      </Stack>
    </Container>
  )
}
