import { useColorMode, IconButton } from '@chakra-ui/react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
        />
    )
}

export default DarkModeSwitch
