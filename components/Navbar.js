import { Box, Flex, Image, Heading } from '@chakra-ui/react'
import  Link  from 'next/link'
import React from 'react'
import '@fontsource/poppins/600.css'
import {IoMenu} from 'react-icons/io5'

const Navbar = () => {
  return (
    <Flex justifyContent='space-between' alignItems='center' px={['20px','20px','70px']} w='100%' bgColor='#121829CC' h='80px'>
      <Box as ='a' href='/'>
        <Image src='logo.svg'/>
      </Box>
      <Flex w='424px' d={['none', 'none', 'flex']} justifyContent='space-between' alignItems='center'>
        <Box
          px='8px'
          as='a'
          cursor='pointer'
          variant='ghost'
          _hover={{
            bg: 'transparent',
            pb:'4px',
            borderBottom: '2px solid #323B54',
          }}
        >
          <Link href ='/movies'>
            <Heading color ='#A8AEBF' fontSize='16px' fontWeight='600'>Movies</Heading>
          </Link>
        </Box>
        <Box
          as='a'
          cursor='pointer'
          px='8px'
          variant='ghost'
          _hover={{
            bg: 'transparent',
            pb:'4px',
            borderBottom: '2px solid #323B54',
          }}
        >
          <Link href='/shows'>
            <Heading color ='#A8AEBF' fontSize='16px' fontWeight='600'>TV Shows</Heading>
          </Link>
        </Box>
        <Box
          as='a'
          cursor='pointer'
          px='8px'
          variant='ghost'
          _hover={{
            bg: 'transparent',
            pb:'4px',
            borderBottom: '2px solid #323B54',
          }}
        >
          <Link href='/actors'>
            <Heading color ='#A8AEBF' fontSize='16px' fontWeight='600'>Actors</Heading>
          </Link>
        </Box>
      </Flex>
      <Box d={['block', 'block', 'none']}>
        <IoMenu fontSize={'36px'} color='#A8AEBF'/>
      </Box>
    </Flex >
  )
}

export default Navbar
