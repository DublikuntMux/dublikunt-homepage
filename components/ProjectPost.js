import {AspectRatio, Badge, Box, Button, Image, useColorMode} from '@chakra-ui/react'
import {AiFillStar, AiOutlineArrowRight} from "react-icons/ai";
import {motion} from 'framer-motion';
import NextLink from 'next/link'

const ProjectPost = ({img, href, name, stars, status, statcolor}) => {

	const MotionBox = motion(Box)

	const {colorMode} = useColorMode()
	const Color = {
		light: '#1100ff',
		dark: '#bad145'
	}
	const InvColor = {
		light: '#000000',
		dark: '#FFFFFF'
	}
	const HoverBg = {
		light: '#A0AEC0',
		dark: '#1A202C',
	}

	return (
		<MotionBox whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
				   maxW='sm' borderWidth='3px' borderRadius='lg' borderColor={InvColor[colorMode]} overflow='hidden'>
			<AspectRatio borderWidth='1px' borderColor={InvColor[colorMode]} maxW='232px' ratio={4 / 3}>
				<Image src={img} alt="Изображение не найдено"/>
			</AspectRatio>
			<Box p='6'>
				<Box display='flex' alignItems='baseline'>
					<Badge borderRadius='full' px='2' colorScheme={statcolor}>
						{status}
					</Badge>
				</Box>
				<Box mt='1' fontWeight='semibold' lineHeight='tight' isTruncated>
					{name}
				</Box>
				<Box mt='1' fontWeight='semibold' lineHeight='tight' isTruncated>
					<NextLink href={href} passHref>
						<Button rightIcon={<AiOutlineArrowRight color={InvColor[colorMode]}/>} size='sm'
								variant='outline' p={[1, 2, 4]}
								_hover={{backgroundColor: HoverBg[colorMode]}}>
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
								color={i < stars ? Color[colorMode] : InvColor[colorMode]}
							/>
						))}
				</Box>
			</Box>
		</MotionBox>
	)
}

export default ProjectPost
