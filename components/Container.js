import {
	SiAirplayvideo,
	SiAngellist,
	SiBlogger,
	SiGithub,
	SiSlickpic,
} from "react-icons/si";
import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import NextLink from "next/link";
import React from "react";

import DarkModeSwitch from "../components/DarkModeSwitch";
import Head from "next/head";

const Container = ({ children }) => {
	const MotionButton = motion(Button);

	const { colorMode } = useColorMode();
	const BGColor = {
		light: "#FFFFFF",
		dark: "#171717",
	};
	const Color = {
		light: "#000000",
		dark: "#FFFFFF",
	};
	const HoverBg = {
		light: "#A0AEC0",
		dark: "#1A202C",
	};
	const StickyNav = styled(Flex)`
		position: sticky;
	`;

	const Variants = {
		hidden: { opacity: 0, x: 0, y: 20 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: -0, y: 20 },
	};

	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9621b5" />
				<meta name="msapplication-TileColor" content="#7f0086" />
				<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
				<meta name="theme-color" content="#813098" />
				<title></title>
			</Head>
			<motion.article
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={Variants}
				transition={{ duration: 0.4, type: "easeInOut" }}
				style={{ position: "relative" }}
			>
				<StickyNav
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					maxWidth="700px"
					width="100%"
					bg={BGColor[colorMode]}
					px={[4, 0, 0]}
					mt={6}
					mb={[0, 0, 5]}
					mx="auto"
				>
					<Box>
						<NextLink href="/" passHref>
							<MotionButton
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								leftIcon={<SiAirplayvideo />}
								size="sm"
								variant="outline"
								p={[1, 2, 4]}
								_hover={{ backgroundColor: HoverBg[colorMode] }}
							>
								??????????????
							</MotionButton>
						</NextLink>
						<NextLink href="/blog" passHref>
							<MotionButton
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								leftIcon={<SiBlogger />}
								size="sm"
								variant="outline"
								p={[1, 2, 4]}
								_hover={{ backgroundColor: HoverBg[colorMode] }}
							>
								????????
							</MotionButton>
						</NextLink>
						<NextLink href="/social" passHref>
							<MotionButton
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								leftIcon={<SiAngellist />}
								size="sm"
								variant="outline"
								p={[1, 2, 4]}
								_hover={{ backgroundColor: HoverBg[colorMode] }}
							>
								??????. ????????
							</MotionButton>
						</NextLink>
						<NextLink href="/project" passHref>
							<MotionButton
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								leftIcon={<SiSlickpic />}
								size="sm"
								variant="outline"
								p={[1, 2, 4]}
								_hover={{ backgroundColor: HoverBg[colorMode] }}
							>
								??????????????
							</MotionButton>
						</NextLink>
					</Box>
					<NextLink
						href="https://github.com/DublikuntMux/dublikunt-homepage"
						passHref
					>
						<MotionButton
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							target="_blank"
							size="xs"
							leftIcon={<SiGithub />}
							as="a"
							variant="outline"
							p={[1, 2, 4]}
							_hover={{ backgroundColor: HoverBg[colorMode] }}
						>
							Source
						</MotionButton>
					</NextLink>
					<DarkModeSwitch />
				</StickyNav>
				<Flex
					as="main"
					justifyContent="center"
					flexDirection="column"
					bg={BGColor[colorMode]}
					color={Color[colorMode]}
					px={[0, 4, 4]}
					mt={[4, 8, 8]}
				>
					{children}
				</Flex>
			</motion.article>
		</>
	);
};

export default Container;
