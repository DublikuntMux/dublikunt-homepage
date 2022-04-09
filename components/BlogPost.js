import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import React from 'react'

const BlogPost = ({ title, publishedAt, summary, slug }) => {

	const MotionBox = motion(Box)

	const { colorMode } = useColorMode()
	const SecondColor = {
		light: '#2D3748',
		dark: '#A0AEC0'
	}

	return (
		<NextLink href={`blog/${slug}`} passHref>
			<Link w="100%" _hover={{ textDecoration: 'none' }}>
				<MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
						   mb={10} display="block" width="100%">
					<Flex
						width="100%"
						align="flex-start"
						justifyContent="space-between"
						flexDirection={['column', 'row']}
					>
						<Flex flexDirection="column" align="flex-start" justifyContent="start" width="100%">
							<Heading size="md" as="h3" mb={1} fontWeight="medium">
								{title}
							</Heading>
						</Flex>

						<Text
							color="gray.500"
							minWidth="140px"
							textAlign={['left', 'right']}
							mb={[4, 0]}
						>
							{format(parseISO(publishedAt), 'MMMM dd, yyyy')}
						</Text>

					</Flex>
					<Text color={SecondColor[colorMode]}>{summary}</Text>
				</MotionBox>
			</Link>
		</NextLink>
	)
}

export default BlogPost
