import {
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useColorMode,
	useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const IconInfo = ({ icon, color, title, text }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode } = useColorMode();

	const MotionButton = motion(IconButton);

	const TextColor = {
		light: "#1c2733",
		dark: "#beafe5",
	};
	const InvColor = {
		light: "#000000",
		dark: "#FFFFFF",
	};
	const BackGround = {
		light: "#c3d4ea",
		dark: "#1f1a2a",
	};

	return (
		<>
			<MotionButton
				onClick={onOpen}
				whileHover={{ scale: 1.4 }}
				whileTap={{ scale: 0.9 }}
				size="4em"
				color={color}
				variant="ghost"
				icon={icon}
			/>

			<Modal
				size="3xl"
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<ModalContent backgroundColor={BackGround[colorMode]}>
					<ModalHeader color={TextColor[colorMode]}>{title}</ModalHeader>
					<ModalCloseButton color={InvColor[colorMode]} />
					<ModalBody color={TextColor[colorMode]}>{text}</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default IconInfo;
