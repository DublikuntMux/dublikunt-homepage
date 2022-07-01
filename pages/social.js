import { Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";

import SocialPost from "../components/SocialPost";
import Container from "../components/Container";

export default function Social() {
	return (
		<Container>
			<Head>
				<title>Social Network - Dublikunt Max</title>
			</Head>
			<Heading align="center" size="2xl" mb={2}>
				Мои социальные сети
			</Heading>
			<Stack
				justifyContent="center"
				alignItems="flex-start"
				m="0 auto 4rem auto"
				px={2}
			>
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Grid
						templateColumns="repeat(3, 1fr)"
						templateRows="repeat(3, 1fr)"
						gap={4}
					>
						<SocialPost
							href="https://github.com/DublikuntMux"
							img="/images/soci/avatar.jpg"
							name="Github"
							description="Здесь все мои проекты"
						/>
						<SocialPost
							href="https://www.instagram.com/dublikunt/"
							img="/images/soci/instagram.jpg"
							name="Instagram"
							description="Немного моей личной жизни"
						/>
						<SocialPost
							href="https://www.youtube.com/channel/UCwf83l1dG7JKvmLdR5rDZTg"
							img="/images/soci/chenel.jpg"
							name="Youtube"
							description="Смешные видео"
						/>
					</Grid>
				</Flex>
			</Stack>
		</Container>
	);
}
