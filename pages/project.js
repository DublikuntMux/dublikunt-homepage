import { Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";

import ProjectPost from "../components/ProjectPost";
import Container from "../components/Container";

export default function Project() {
	return (
		<Container>
			<Head>
				<title>Project - Dublikunt Max</title>
			</Head>
			<Heading align="center" size="2xl" mb={2}>
				Мои проекты
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
						<ProjectPost
							href="https://github.com/DublikuntMux/AlbedoMod"
							img="/images/project/albedo.jpg"
							name="Albedo Mod"
							stars="5"
							status="New"
							statcolor="cyan"
						/>
						<ProjectPost
							href="https://github.com/DublikuntMux/Alonka"
							img="/images/project/alonka.jpg"
							name="Alonka toolbox"
							stars="4"
							status="New"
							statcolor="cyan"
						/>
						<ProjectPost
							href="https://github.com/DublikuntMux/dublikunt-homepage"
							img="/images/project/site.jpg"
							name="Этот сайт"
							stars="5"
							status="New"
							statcolor="cyan"
						/>
						<ProjectPost
							href="https://github.com/DublikuntMux/Flopa"
							img="/images/project/flopa.jpg"
							name="Flopa.exe"
							stars="4"
							status="Un used"
							statcolor="red"
						/>
						<ProjectPost
							href="https://github.com/DublikuntMux/Crock"
							img="/images/project/crock.jpg"
							name="Crock.exe"
							stars="5"
							status="New"
							statcolor="cyan"
						/>
						<ProjectPost
							href="https://github.com/DublikuntMux/espdeauther"
							img="/images/project/deauther.jpg"
							name="espdeauther"
							stars="5"
							status="Old"
							statcolor="gray"
						/>
					</Grid>
				</Flex>
			</Stack>
		</Container>
	);
}
