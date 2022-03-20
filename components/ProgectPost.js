import { Box, Image, Badge, useColorMode, AspectRatio, Button } from '@chakra-ui/react'
import { AiFillStar, AiOutlineArrowRight} from "react-icons/ai";
import NextLink from 'next/link'

const ProgectPost = ({img, href, name, stars, status}) => {

    const { colorMode } = useColorMode()
    const color = {
        light: 'white',
        dark: 'black'
    }
    const invcolor = {
        light: 'black',
        dark: 'white'
    }
    const HoverBg = {
        light: 'gray.300',
        dark: 'gray.800',
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <AspectRatio maxW='232px' ratio={4 / 3}>
                <Image src={img}/>
            </AspectRatio>
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='cyan'>
                    {status}
                </Badge>
                </Box>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated >
                    {name}
                </Box>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated >
                    <NextLink href={href} passHref> 
                        <Button target="_blank" rightIcon={<AiOutlineArrowRight color={invcolor[colorMode]}/>} as="a" size='sm' variant='outline' p={[1, 2, 4]} 
                        _hover={{ backgroundColor: HoverBg[colorMode] }}>
                            Ссылка
                        </Button>
                    </NextLink>
                </Box>
                <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                    <AiFillStar
                        key={i}
                        color={i < stars ? invcolor[colorMode] : color[colorMode]}
                    />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ProgectPost
