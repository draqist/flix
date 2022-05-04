import { Box, Flex, Heading, Image, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";


const Details = ({ tagline, poster, overview, vote_average, release_date, type,genres, runtime }) => {
  return ( 
    <Flex alignItems='flex-start' pt={['20px','20px','20px','0px','120px']} pb='40px' direction={['column-reverse','column-reverse','unset']} px={['','','','0px','90px']} gap='80px'>
          <Box w={['','','480px']} h={['','','720px']}>
            <Image src={'https://image.tmdb.org/t/p/w500/' + poster } alt='' borderRadius='24px' />
          </Box>
          <Box w={['','','480px']}>
              <Heading fontSize='24px' fontWeight='700' letterSpacing='-1.5%' color='#EBEEF5' mb='24px'>{ tagline }</Heading>
            <Box h=''>
              <Text fontSize={['14px','14px','20px']} color='#8E95A9' fontWeight='400'>{overview}</Text>
            </Box>
            <Tag h='40px' top='10px'
              px='8px'borderRadius='8px' mt='24px'fontWeight='400' bgColor='#000000A6' color='#FFAD49'
              _hover={{
                  bgColor: 'white',
                  fontWeight: '900',
                  color:'#FFAD02'
                }}>
            <TagLeftIcon as = {AiOutlineStar} fontSize='16px' mr='4px' />
            <TagLabel> {vote_average}</TagLabel>
            </Tag>
            
            <Box mt='24px'>
              <Text color='#767E94' fontSize='16px' fontWeight='400'> Type</Text>
              <Text color='#C3C8D4' fontSize='20px' fontWeight='400'> {type} </Text>
            </Box>
            <Box mt='24px'>
              <Text color='#767E94' fontSize='16px' fontWeight='400'> Release Date:</Text>
              <Text color='#C3C8D4' fontSize='20px' fontWeight='400'>{release_date}</Text>
            </Box>
            <Box mt='24px'>
              <Text color='#767E94' fontSize='16px' fontWeight='400'> Run Time</Text>
              <Text color='#C3C8D4' fontSize='20px' fontWeight='400'>{runtime} mins.</Text>
            </Box>
            <Box mt='24px'>
              <Text color='#767E94' fontSize='16px' fontWeight='400'> Genres</Text>
              {
                genres.map(genre => (
                  <Text key={genre.id} as='span' color='#C3C8D4' fontSize='20px' fontWeight='400'>{ genre.name }, </Text>
                ))
              }
            </Box>
          </Box>
    </Flex>
  );
}

export default Details;