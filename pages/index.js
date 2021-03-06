import {
	Avatar,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

import {
	SiC,
	SiCplusplus,
	SiCsharp,
	SiDart,
	SiDotnet,
	SiElectron,
	SiFlutter,
	SiGo,
	SiGodotengine,
	SiIntellijidea,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiPycharm,
	SiPython,
	SiReact,
	SiRenpy,
	SiRider,
	SiRust,
	SiSublimetext,
	SiThreedotjs,
	SiUnity,
	SiVisualstudio,
	SiVisualstudiocode,
	SiWebstorm,
} from "react-icons/si";

import Container from "../components/Container";
import IconInfo from "../components/IconInfo";

export default function Index() {
	const { colorMode } = useColorMode();

	const MotionAvatar = motion(Avatar);

	const SecondColor = {
		light: "#2D3748",
		dark: "#A0AEC0",
	};

	const InvColor = {
		light: "#000000",
		dark: "#FFFFFF",
	};

	const RustColor = {
		light: "#000000",
		dark: "#674409",
	};

	return (
		<Container>
			<Head>
				<title>Home - Dublikunt Max</title>
			</Head>
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
					<Flex alignItems="center" gap={6}>
						<Heading align="center" size="lg" mb={2}>
							Всем, привет! Я, Dublikunt Max
						</Heading>
						<MotionAvatar
							whileHover={{ scale: 1.3 }}
							size="2xl"
							name="Dublikunt Max"
							src="/images/soci/avatar.jpg"
							alt="Аватарка не найдена"
						/>
					</Flex>
					<AnimatePresence exitBeforeEnter initial={true}>
						<Text color={SecondColor[colorMode]}>
							Что я могу сказать про себя ? Да, ничего ))))
						</Text>
					</AnimatePresence>
				</Flex>
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="center"
					gap={6}
				>
					<Heading align="center" size="lg" mb={2}>
						Языки программирования, которые я знаю
					</Heading>
					<Grid
						templateColumns="repeat(3, 1fr)"
						templateRows="repeat(3, 1fr)"
						gap={6}
					>
						<IconInfo
							icon={<SiPython size="4em" />}
							color="#3776AB"
							title="Кобра"
							text="Первый язык который я выучил и на нем я сделал свою первую программу которую продавал."
						/>
						<IconInfo
							icon={<SiCplusplus size="4em" />}
							color="#00599C"
							title="С с натянутым ООП"
							text="На C++ я написал свой первый вирус."
						/>
						<IconInfo
							icon={<SiC size="4em" />}
							color="#A8B9CC"
							title="Великий и ужасный C"
							text="Начал учить вмести с C++ для того чтобы да"
						/>
						<IconInfo
							icon={<SiDotnet size="4em" />}
							color="#512BD4"
							title=".ДА"
							text="Лучшая платформа для языков для программирования"
						/>
						<IconInfo
							icon={<SiCsharp size="4em" />}
							color="#239120"
							title="Сын .NET"
							text="На это языке программирования я написал много программ и несколько вирусов."
						/>
						<IconInfo
							icon={<SiGo size="4em" />}
							color="#00ADD8"
							title="Отпрыск гугла"
							text="Начал учить из-зи смешного названия."
						/>
						<IconInfo
							icon={<SiRust size="4em" />}
							color={RustColor[colorMode]}
							title="Ржавый C"
							text="Начал учить после Go после того как увидел про него видео на ютубе."
						/>
						<IconInfo
							icon={<SiJavascript size="4em" />}
							color="#F7DF1E"
							title="Причем тут Java?"
							text="А что тут сказать то что вы сейчас видите полностью сделано на нем."
						/>
						<IconInfo
							icon={<SiDart size="4em" />}
							color="#0175C2"
							title="Зачем учить кроме как для Flutter?"
							text="Начал учить для того чтобы написать свое приложение TellMe но что-то не задалось"
						/>
					</Grid>
					<Heading align="center" size="lg" mb={2}>
						Фреймворки, которые я знаю
					</Heading>
					<Grid
						templateColumns="repeat(3, 1fr)"
						templateRows="repeat(3, 1fr)"
						gap={6}
					>
						<IconInfo
							icon={<SiNextdotjs size="4em" />}
							color={InvColor[colorMode]}
							title="Зачем другие?"
							text="зачем использовать чистый React если можно использовать Next.js"
						/>
						<IconInfo
							icon={<SiReact size="4em" />}
							color="#61DAFB"
							title="Angular но только меньше весит"
							text="Ничего лишнего. Просто и лаконично."
						/>
						<IconInfo
							icon={<SiThreedotjs size="4em" />}
							color={InvColor[colorMode]}
							title="Теперь в 3D"
							text="Раньше при помощи этой библиотеке на сайте была анимация с крутящемся столом."
						/>
						<IconInfo
							icon={<SiUnity size="4em" />}
							color={InvColor[colorMode]}
							title="За его плечами все мобильные игры из трендов Playmarcket"
							text="Лучший игровой движок из всех"
						/>
						<IconInfo
							icon={<SiFlutter size="4em" />}
							color="#02569B"
							title="То ради чего стоит учить Dart"
							text="Начал учить для того чтобы написать свое красивое, кроссплатформенное приложение
								   TellMe но что-то не задалось"
						/>
						<IconInfo
							icon={<SiElectron size="4em" />}
							color="#47848F"
							title="Мне браузер и Node.js собой"
							text="для тех кто не хочет учит что-то кроме javascript"
						/>
						<IconInfo
							icon={<SiGodotengine size="4em" />}
							color="#478CBF"
							title="Открытая Unity"
							text="Хорошая замена Unity."
						/>
						<IconInfo
							icon={<SiMongodb size="4em" />}
							color="#47A248"
							title="Лучшие базы данных"
							text="Единственные базы данных которые я использую."
						/>
						<IconInfo
							icon={<SiRenpy size="4em" />}
							color="#FF7F7F"
							title="На этом рабоет бесконечное лето"
							text="Сейчас я делаю на этом игру."
						/>
					</Grid>
					<Heading align="center" size="lg" mb={2}>
						Инструменты которыми я пользуюсь
					</Heading>
					<Grid
						templateColumns="repeat(3, 1fr)"
						templateRows="repeat(3, 1fr)"
						gap={6}
					>
						<IconInfo
							icon={<SiIntellijidea size="4em" />}
							color={InvColor[colorMode]}
							title="Я там моды для Майнкрафт делал"
							text="IDE для андроид приложений и остальных java программ, но я использую её для писания модов на майнкрафт. "
						/>
						<IconInfo
							icon={<SiWebstorm size="4em" />}
							color={InvColor[colorMode]}
							title="Тут был написан весь сайт"
							text="Лучшая IDE для того чтобы делать сайты."
						/>
						<IconInfo
							icon={<SiPycharm size="4em" />}
							color={InvColor[colorMode]}
							title="Первая IDE что я использовал"
							text="дРаньше я использовал community а недавно приобрел premium."
						/>
						<IconInfo
							icon={<SiRider size="4em" />}
							color={InvColor[colorMode]}
							title="Visual studio за деньги"
							text="IDE для всего что использует .NET"
						/>
						<IconInfo
							icon={<SiVisualstudio size="4em" />}
							color="#5C2D91"
							title="Лучшая .NET IDE за свои деньги"
							text="IDE для всего что использует .NET"
						/>
						<IconInfo
							icon={<SiVisualstudiocode size="4em" />}
							color="#007ACC"
							title="сын Visualstudio и open source"
							text="Одна IDE для всего сразу."
						/>
						<IconInfo
							icon={<SiSublimetext size="4em" />}
							color="#FF9800"
							title="Редактор всего что возможно"
							text="Один редактор - бесконечные возможности."
						/>
						<IconInfo
							icon={<SiUnity size="4em" />}
							color={InvColor[colorMode]}
							title="За его плечами все мобильные игры из трендов Playmarcket"
							text="Лучший игровой движок из всех"
						/>
						<IconInfo
							icon={<SiRenpy size="4em" />}
							color="#FF7F7F"
							title="На этом рабоет бесконечное лето"
							text="Сейчас я делаю на этом игру."
						/>
					</Grid>
				</Flex>
			</Stack>
		</Container>
	);
}
