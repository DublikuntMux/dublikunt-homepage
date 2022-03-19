import { Box, Image, Badge, useColorMode, AspectRatio } from '@chakra-ui/react'
import { AiFillStar} from "react-icons/ai";

const ProgectPost = ({href, name, stars, status}) => {

    const { colorMode } = useColorMode()
    const color = {
        light: 'white',
        dark: 'black'
    }
    const invcolor = {
        light: 'black',
        dark: 'white'
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <AspectRatio maxW='232px' ratio={4 / 3}>
                <Image src={href}/>
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
