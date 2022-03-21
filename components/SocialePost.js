import { Box, Image, useColorMode, AspectRatio, Button, Text } from '@chakra-ui/react'
import { AiOutlineArrowRight} from "react-icons/ai";
import NextLink from 'next/link'
import { motion } from 'framer-motion';

const SocialePost = ({img, href, description, name}) => {

    const MotionBox = motion(Box)

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
        <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
         maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <AspectRatio maxW='232px' ratio={4 / 3}>
                <Image src={img} alt="Изображение не найдено"/>
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
                        <Button rightIcon={<AiOutlineArrowRight color={color[colorMode]}/>} size='sm' variant='outline' p={[1, 2, 4]} 
                        _hover={{ backgroundColor: HoverBg[colorMode] }}>
                            Ссылка
                        </Button>
                    </NextLink>
                </Box>
            </Box>
        </MotionBox>
    )
}

export default SocialePost
