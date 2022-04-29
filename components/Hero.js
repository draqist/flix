import { Box,Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'

const Hero = () => {
  return (
    <Box w='500px' mt='80px' pb='20px' >
      <Heading color='#EBEEF5' fontWeight='600' fontSize='64px'> ChillFlix</Heading>
      <Text fontSize='16px' fontWeight='400' color='#8E95A9'> A web app where you can search for info about your favorite movies, tv shows and actors 😉. If there's a particular movie that you can't find, shoot me a <Text as='span' color='#9C92F8'>mail</Text> </Text>
      <InputGroup mt='24px'  >
        <InputLeftElement
          pt='20px' 
        pointerEvents='none'
        children={<RiSearch2Line color='#475069' fontSize='24px' />}/>
        <Input outline='0' 
          _hover={{
          borderColor:'#323B54'
          }}
          _placeholder={{color:'#475069'}}
          border='1px solid #323B54'
          bg='#0000001A'
          focusBorderColor='none'
          color='#475069' h='64px' placeholder='Search Movies or TV Shows' borderColor='#323B54' />
      </InputGroup>
    </Box>
  )
}

export default Hero
