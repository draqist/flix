/*eslint-disable react/no-children-prop, react/no-unescaped-entities */
import { Box, Image, Tag, TagLabel, TagLeftIcon, Text, } from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'
import {motion} from 'framer-motion'

const Card = ({poster, title, rating}) => {
  return (
    <Box pos='relative' mx={['10px','10px', '0']}>
        <Box as ={motion.div} initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} whileTap={{scale: 0.7, transition: '0.5s linear'}} transition ='1s linear' bgColor='#20283ECC'  borderRadius='12px' p='8px' minHeight='480px' w='282px'  mt='24px' >
        <Box w='266px'  h='400px' borderRadius='8px' overflow='hidden'>
          <Box pos='absolute'>
            <Tag ml='10px' pos='relative' h='40px' top='10px' px='8px' fontWeight='400' bgColor='#000000A3'  color='#FFAD49' _hover={{
              bgColor: 'white',
              fontWeight: '900',
              color:'#FFAD02'
            }}>
              <TagLeftIcon as = {AiOutlineStar} fontSize='16px' mr='4px' />
              <TagLabel  > {rating}</TagLabel>
            </Tag>
          </Box>
          <Image alt={title} as={motion.img} whileHover={{scale:1.1,overflow: 'hidden'}} overflow='hidden' borderRadius='8px' src={ `https://image.tmdb.org/t/p/w500/${poster}`}/>
        </Box>
        <Text fontSize='16px' mt='16px' pl='10px' fontWeight='600' color='#EBEEF5'> {title} </Text>
      </Box>
    </Box>
  )
}

export default Card
