import Head from 'next/head'
import { useColorMode, Heading, Button, Flex, Stack, Grid} from '@chakra-ui/react'
import NextLink from 'next/link'
import { SiGithub, SiInstagram, SiYoutube } from "react-icons/si";
import Container from '../components/Container'

export default function Sociale() {

  const { colorMode } = useColorMode()
  const Bg = {
    light: 'gray.300',
    dark: 'gray.800',
    }

  return (
    <Container>
      <Head>
        <title>Sociale Networck - Dublikunt Max</title>
      </Head>
      <Stack as="main" spacing={8} justifyContent="center" alignItems="flex-start" m="0 auto 4rem auto" maxWidth="700px" px={2} >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" >
          <Heading mb={2}>Мои соцсети</Heading>
          <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(3, 1fr)' gap={6}>
            <NextLink href="https://github.com/DublikuntMux" passHref>
                <Button leftIcon={<SiGithub />} as="a" variant='outline' p={[1, 2, 4]} _hover={{ backgroundColor: Bg[colorMode] }}>
                    GitHub
                </Button>
            </NextLink>
            <NextLink href="https://www.instagram.com/dublikunt/" passHref>
                <Button leftIcon={<SiInstagram />} as="a" variant='outline' p={[1, 2, 4]} _hover={{ backgroundColor: Bg[colorMode] }}>
                    Instagram
                </Button>
            </NextLink>
            <NextLink href="https://www.youtube.com/channel/UCwf83l1dG7JKvmLdR5rDZTg" passHref>
                <Button leftIcon={<SiYoutube />} as="a" variant='outline' p={[1, 2, 4]} _hover={{ backgroundColor: Bg[colorMode] }}>
                    Youtube
                </Button>
            </NextLink>
          </Grid>  
        </Flex>
      </Stack>
    </Container>
  )
}
