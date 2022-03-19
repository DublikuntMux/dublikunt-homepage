import Head from 'next/head'
import { useColorMode, Heading, Button, Flex, Stack, ButtonGroup} from '@chakra-ui/react'
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
          <Heading align="center" size="md" mb={2}>Мои соцсети</Heading>
          <ButtonGroup isAttached variant='outline' size="md">
            <NextLink href="https://github.com/DublikuntMux" passHref>
                <Button target="_blank" leftIcon={<SiGithub />} as="a" _hover={{ backgroundColor: Bg[colorMode] }}>
                    GitHub
                </Button>
            </NextLink>
            <NextLink href="https://www.instagram.com/dublikunt/" passHref>
                <Button target="_blank" leftIcon={<SiInstagram />} as="a" _hover={{ backgroundColor: Bg[colorMode] }}>
                    Instagram
                </Button>
            </NextLink>
            <NextLink href="https://www.youtube.com/channel/UCwf83l1dG7JKvmLdR5rDZTg" passHref>
                <Button target="_blank" leftIcon={<SiYoutube />} as="a" _hover={{ backgroundColor: Bg[colorMode] }}>
                    Youtube
                </Button>
            </NextLink>
          </ButtonGroup>  
        </Flex>
      </Stack>
    </Container>
  )
}
