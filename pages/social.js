import Head from 'next/head'
import { Heading, Flex, Stack, Grid } from '@chakra-ui/react'

import Container from '../components/Container'
import SocialPost from '../components/SocialPost'

export default function Social() {
  return (
    <Container>
      <Head>
        <title>Social Network - Dublikunt Max</title>
      </Head>
      <Heading align="center" size="2xl" mb={2}>Мои социальные сети</Heading>
      <Stack justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(3, 1fr)' gap={4}>
              <SocialPost href='https://github.com/DublikuntMux' img='/images/Ava.jpg'
						  name="Github" description='Здесь все мои проекты'/>
              <SocialPost href='https://www.instagram.com/dublikunt/' img='/images/Insta.jpg'
						  name="Instagram" description='Немного моей личной жизни'/>
              <SocialPost href='https://www.youtube.com/channel/UCwf83l1dG7JKvmLdR5rDZTg' img='/images/Crock.jpg'
						  name="Youtube" description='Смешные видео'/>
          </Grid>
        </Flex>
      </Stack>
    </Container>
  )
}
