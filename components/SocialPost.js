import {AspectRatio, Box, Button, Image, Text, useColorMode} from '@chakra-ui/react'
import {AiOutlineArrowRight} from "react-icons/ai";
import {motion} from 'framer-motion';
import NextLink from 'next/link'

const SocialPost = ({img, href, description, name}) => {

	const MotionBox = motion(Box)

	const {colorMode} = useColorMode()
	const Color = {
		light: '#000000',
		dark: '#FFFFFF'
	}
	const HoverBg = {
		light: '#A0AEC0',
		dark: '#1A202C',
	}

	return (
		<MotionBox whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
				   maxW='sm' borderWidth='3px' borderRadius='lg' borderColor={Color[colorMode]} overflow='hidden'>
			<AspectRatio borderWidth='1px' borderColor={Color[colorMode]} maxW='232px' ratio={4 / 3}>
				<Image src={img} alt="Изображение не найдено"/>
			</AspectRatio>
			<Box p='6'>
				<Box mt='1' fontWeight='semibold' lineHeight='tight' isTruncated>
					{name}
				</Box>
				<Text fontSize='10px'>
					{description}
				</Text>
				<Box mt='1' fontWeight='semibold' lineHeight='tight' isTruncated>
					<NextLink href={href} passHref>
						<Button rightIcon={<AiOutlineArrowRight color={Color[colorMode]}/>} size='sm' variant='outline'
								p={[1, 2, 4]}
								_hover={{backgroundColor: HoverBg[colorMode]}}>
							Ссылка
						</Button>
					</NextLink>
				</Box>
			</Box>
		</MotionBox>
	)
}

export default SocialPost
