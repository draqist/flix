import { Box, Image, Text,} from '@chakra-ui/react'
const Card = ({poster, title, rating}) => {
  return (
    <Box bgColor='#20283ECC' borderRadius='12px' p='8px' h='480px' w='282px' >
      <Box w='266px' h='400px' borderRadius='8px'>
        <Image/>
      </Box>
      <Text fontSize='16px' pl='10px' fontWeight='600' color='#EBEEF5'> Image</Text>
    </Box>
  )
}

export default Card
