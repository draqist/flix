import { Box, Flex, Grid, GridItem, Heading, Image, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";


const TvDetails = ({ lastdate, noSeasons, status,tagline, poster, overview, vote_average, release_date, type,genres, runtime }) => {
  return ( 
    <Flex alignItems='flex-start' pt={['0px','0px','','0px','120px']} pb='40px' direction={['column-reverse','column-reverse','unset']} px={['','','','0px','90px']} gap={['40px','40px','80px']}>
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
            <Grid templateColumns={'repeat(2, 1fr)'}>
              <GridItem mt='24px'>
                <Text color='#767E94' fontSize='16px' fontWeight='400'> Type</Text>
                <Text color='#C3C8D4' fontSize='20px' fontWeight='400'> {type} </Text>
              </GridItem>
              <GridItem mt='24px'>
                <Text color='#767E94' fontSize='16px' fontWeight='400'> Status</Text>
                <Text color='#C3C8D4' fontSize='20px' fontWeight='400'>{status}</Text>
              </GridItem>
              <GridItem mt='24px'>
                <Text color='#767E94' fontSize='16px' fontWeight='400'> First Air Date</Text>
                <Text color='#C3C8D4' fontSize='20px' fontWeight='400'>{release_date}</Text>
              </GridItem>
              <GridItem mt='24px'>
                <Text color='#767E94' fontSize='16px' fontWeight='400'> Last Air Date</Text>
                <Text color='#C3C8D4' fontSize='20px' fontWeight='400'>{lastdate}</Text>
              </GridItem>
              <GridItem mt='24px'>
                <Text color='#767E94' fontSize='16px' fontWeight='400'> No. of Seasons</Text>
                <Text color='#C3C8D4' fontSize='20px' fontWeight='400'>{noSeasons} </Text>
              </GridItem>
              <GridItem mt='24px'>
                <Text color='#767E94' fontSize='16px' fontWeight='400'> Episode run time</Text>
                <Text color='#C3C8D4' fontSize='20px' fontWeight='400'>{runtime} mins. </Text>
              </GridItem>
              <GridItem colSpan={2} mt='24px'>
                <Text color='#767E94' fontSize='16px' fontWeight='400'> Genres</Text>
                {
                  genres.map(genre => (
                    <Text key={genre.id} as='span' color='#C3C8D4' fontSize='20px' fontWeight='400'>{ genre.name }, </Text>
                  ))
                }
              </GridItem>
            </Grid>
            
          </Box>
    </Flex>
  );
}

export default TvDetails;