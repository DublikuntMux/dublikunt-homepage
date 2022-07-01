import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

import Container from "../components/Container";

export default function Custom404() {
	const { colorMode } = useColorMode();
	const HoverBg = {
		light: "#A0AEC0",
		dark: "#1A202C",
	};

	return (
		<Container>
			<Head>
				<title>404 Error - Dublikunt Max</title>
			</Head>
			<Heading size="2xl" mb={2} align="center">
				Не найдено
			</Heading>
			<Text align="center">Такой странички нет</Text>
			<Box my={3} align="center">
				<NextLink href="/" passHref>
					<Button
						size="xl"
						variant="outline"
						p={[1, 2, 4]}
						_hover={{ backgroundColor: HoverBg[colorMode] }}
					>
						Вернутся на главную
					</Button>
				</NextLink>
			</Box>
		</Container>
	);
}
