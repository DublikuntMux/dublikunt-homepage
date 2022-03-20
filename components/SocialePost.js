import { Box, Image, useColorMode, AspectRatio, Button, Text } from '@chakra-ui/react'
import { AiOutlineArrowRight} from "react-icons/ai";
import NextLink from 'next/link'

const SocialePost = ({img, href, description, name}) => {

    const { colorMode } = useColorMode()
    const color = {
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
                <Box mt='1' fontWeight='semibold' lineHeight='tight' isTruncated >
                    {name}
                </Box>
                <Text fontSize='10px' color={color[colorMode]}>
                    {description}
                </Text>
                <Box mt='1' fontWeight='semibold' lineHeight='tight' isTruncated >
                    <NextLink href={href} passHref> 
                        <Button target="_blank" rightIcon={<AiOutlineArrowRight color={color[colorMode]}/>} size='sm' variant='outline' p={[1, 2, 4]} 
                        _hover={{ backgroundColor: HoverBg[colorMode] }}>
                            Ссылка
                        </Button>
                    </NextLink>
                </Box>
            </Box>
        </Box>
    )
}

export default SocialePost
