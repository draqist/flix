import { Box,Heading, Input, useDisclosure, InputGroup, InputLeftElement, Text, Modal, ModalOverlay, ModalContent, ModalBody, Button, Flex, ModalHeader, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box w={['','','500px']} mt='50px' pb='20px' >
      <Heading color='#EBEEF5' fontWeight='600' fontSize='64px' textAlign={['justify', 'justify', 'left']}> Flix</Heading>
      <Text fontSize='16px' fontWeight='400' color='#8E95A9'> A web app where you can search for info about your favorite movies, tv shows and actors 😉. If there's a particular movie that you can't find, shoot me a <Text as='span' color='#9C92F8'>mail</Text> </Text>
        <Box as='button' variant='' px='10px' onClick={() => onOpen()} borderRadius='12px' d='flex'h='64px' w={['100%','100%','348px']} mt='24px' alignItems='center' justifyContent='unset' bg='#0000001A' border='1px solid #323B54'>
          <RiSearch2Line color='#475069' fontSize='24px' pl='10px' />
          <Flex color='#475069' ml='8px' fontWeight='400' fontSize='14px'>
            Search Movies or TV Shows...
          </Flex> 
      </Box>
      <>
        
      <Modal bg='green' preserveScrollBarGap={true}  size='xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='transparent'>
          <ModalHeader>
            
          </ModalHeader>
          <ModalBody>
            <InputGroup  >
              <InputLeftElement
                pt='20px' 
              children={<RiSearch2Line color='#9C92F8'  fontSize='24px' />}/>
              <Input  outline='0' 
                _hover={{
                borderColor:'#323B54'
                }}
                _placeholder={{color:'#475069', fontSize:'16px', fontWeight: '400' }}
                border='1px solid #323B54'
                bg='#0000001A'
                focusBorderColor='none'
                  color='white' h='64px' placeholder='Search Movies or TV Shows' fontSize='20px' fontWeight='' borderColor='#323B54' />
              </InputGroup>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>
        
      </>
    </Box>
  )
}

export default Hero
