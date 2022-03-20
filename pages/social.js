import Head from 'next/head'
import { Heading, Flex, Stack, Grid } from '@chakra-ui/react'
import Container from '../components/Container'
import SocialePost from '../components/SocialePost'

export default function Sociale() {

  return (
    <Container>
      <Head>
        <title>Sociale Networck - Dublikunt Max</title>
      </Head>
      <Heading align="center" size="2xl" mb={2}>Мои социальные сети</Heading>
      <Stack justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' gap={4}>
              <SocialePost href='https://github.com/DublikuntMux' img='/images/Ava.jpg'
               name="Github" description='Тут есть все мои проэкты'/>
              <SocialePost href='https://www.instagram.com/dublikunt/' img='/images/Insta.png'
               name="Instagram" description='Немного моей личной жизни'/>
              <SocialePost href='https://www.youtube.com/channel/UCwf83l1dG7JKvmLdR5rDZTg' img='/images/Crock.png'
               name="Youtube" description='Смешные видио'/>
          </Grid>
        </Flex>
      </Stack>
    </Container>
  )
}
