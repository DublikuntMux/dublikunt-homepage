import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const VoxelSpinner = () => (
  <Spinner size="xl" position="absolute" left="50%" top="50%"
    ml="calc(0px - var(--spinner-size) / 2)" mt="calc(0px - var(--spinner-size))" />
)

export const VoxelContainer = forwardRef(({ children }, ref) => (
  <Box ref={ref} className="voxel-model" m="auto" position="relative" 
    mt={['10px', '-10px', '10px']} mb={['-150px', '-170px', '-340px']}
    w={[280, 360, 680]} h={[280, 320, 640]}>
    {children}
  </Box>
))

const Loader = () => {
  return (
    <VoxelContainer>
      <VoxelSpinner />
    </VoxelContainer>
  )
}

export default Loader
