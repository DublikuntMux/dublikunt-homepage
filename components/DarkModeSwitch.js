import { useColorMode, IconButton } from '@chakra-ui/react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const DarkModeSwitch = () => {

    const MotionIconButton = motion(IconButton)

    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return (
        <MotionIconButton whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}
            aria-label="Toggle dark mode" icon={colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
            onClick={toggleColorMode} color={iconColor[colorMode]}
        />
    )
}

export default DarkModeSwitch
