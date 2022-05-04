/*eslint-disable react/no-children-prop, react/no-unescaped-entities */
import { Box, Flex, Image, Heading, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import  Link  from 'next/link'
import React from 'react'
import '@fontsource/poppins/600.css'
import {IoMenu} from 'react-icons/io5'

const Navbar = () => {
  return (
    <Flex zIndex='20' pos='fixed' justifyContent='space-between' alignItems='center' px={['20px','20px','70px']} w='100%' bgColor='#121829CC' h={['60px','60px','80px']}>
      <Link href='/' passHref>
        <Image alt='some image' src='/logo.svg'/>
      </Link>
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
          <Link passHref href ='/movies'>
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
          <Link passHref href='/shows'>
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
          <Link passHref href='/actors'>
            <Heading color ='#A8AEBF' fontSize='16px' fontWeight='600'>Actors</Heading>
          </Link>
        </Box>
      </Flex>
      <Box d= {['block','block','none']}>
        <Menu size='lg' >
          <MenuButton
            as={IconButton}
            aria-label='Options'
            variant='unstyled'
            icon = {<IoMenu fontSize='36px' color='#A8AEBF'/>}
          />
          <MenuList bgColor='#323B54' border='transparent' color='#9C92F8' zIndex='10'>
            <Link  href='/' passHref>
              <MenuItem command='⌘T' >
                Home
              </MenuItem>
            </Link>
            <Link  href='/movies' passHref  >
              <MenuItem  command='⌘N'>
                Movies
              </MenuItem>
            </Link>
            <Link  href='/shows' passHref>
              <MenuItem command='⌘⇧N'>
                TV Shows
              </MenuItem>
            </Link>
            <Link href='/actors' passHref>
              <MenuItem command='⌘O'>
                Actors
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex >
  )
}

export default Navbar
