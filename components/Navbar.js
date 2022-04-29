import { Box, Button, Flex, Image, Heading  } from '@chakra-ui/react'
import React from 'react'
import '@fontsource/poppins/600.css'
const Navbar = () => {
  return (
    <Flex justifyContent='space-between' alignItems='center' px ='100px' w='100%' bgColor='#121829CC' h='80px'>
      <Box>
        <Image src='logo.svg'/>
      </Box>
      <Flex w='424px' justifyContent='space-between' alignItems='center'>
        <Box
          px='8px'
          as='button'
          variant='ghost'
          _hover={{
            bg: 'transparent',
            borderBottom: '2px solid green',
          }}
          >
          <Heading color ='#A8AEBF' fontSize='16px' fontWeight='600'>Movies</Heading>
        </Box>
        <Box
          as='button'
          px='8px'
          variant='ghost'
          _hover={{
            bg: 'transparent',
            borderBottom: '2px solid green',
          }}
        >
          <Heading color ='#A8AEBF' fontSize='16px' fontWeight='600'>TV Shows</Heading>
        </Box>
        <Box
          as='button'
          px='8px'
          variant='ghost'
          _hover={{
            bg: 'transparent',
            borderBottom: '2px solid green',
          }}
        >
          <Heading color ='#A8AEBF' fontSize='16px' fontWeight='600'>Actors</Heading>
        </Box>
      </Flex>
    </Flex >
  )
}

export default Navbar
