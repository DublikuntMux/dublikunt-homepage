import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const DarkModeSwitch = () => {
	const MotionButton = motion(IconButton);

	const { colorMode, toggleColorMode } = useColorMode();
	const InvColor = {
		light: "#000000",
		dark: "#FFFFFF",
	};
	const BackGround = {
		light: "#d0d0d0",
		dark: "#000000",
	};

	return (
		<MotionButton
			whileHover={{ scale: 1.3 }}
			whileTap={{ scale: 0.8 }}
			aria-label="Toggle dark mode"
			icon={colorMode === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
			onClick={toggleColorMode}
			color={InvColor[colorMode]}
			bg={BackGround[colorMode]}
		/>
	);
};

export default DarkModeSwitch;
