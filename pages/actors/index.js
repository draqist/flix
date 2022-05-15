/*eslint-disable react/no-children-prop */

import {
  Box, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Link,Text
} from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';
import Navbar from '../../components/Navbar';
import Axios from 'axios';
import Card from '../../components/Card';
import { useState } from 'react';


export default function Actors ({ Data }) {
  const [actors, setActors] = useState(Data);
  const [val, setVal] = useState("");
  async function searchFetch() {
    const actorSearch = await Axios.get(`https://api.themoviedb.org/3/search/person?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&query=${val}&page=1&include_adult=false`)
    const actorSearchRes = await actorSearch.data.results
    setActors(actorSearchRes)
  }
  return (
    <Box bgImage='url("Background.svg")' w='100%' bgColor='#121829'>
      <Navbar />
      <Box px={['20px','20px','70px']} pt='80px'>
        <Text fontSize='16px' color='#BEB7FB'>Flix</Text>
        <Heading fontSize='64px' fontWeight='600' color='#EBEEF5'>  Actors </Heading>

        <InputGroup mt='24px' w={['','','346px']} >
          <InputLeftElement
            pt='20px' 
          children={<RiSearch2Line color='#475069'  fontSize='24px' />}/>
          <Input  outline='0' 
            _hover={{
              borderColor:'#323B54'
            }}
            onChange={(e) => {
              setVal(e.target.value);
              searchFetch()
            }}
            value={val}
            _placeholder={{color:'#475069', fontSize:'16px', fontWeight: '400' }}
            border='1px solid #323B54'
            bg='#0000001A'
            focusBorderColor='none'
              color='white' h='64px' placeholder='Search Movies or TV Shows' fontSize='20px' fontWeight='' borderColor='#323B54' />
          </InputGroup>
      </Box>
      <Box px={['20px','20px','70px']} w='100%' mt='48px' pb='28px'>
      <Flex justifyContent='space-between' alignItems='center'>
          <Text fontSize='24px' color='#ebeef5' fontWeight='600'> Popular Actors </Text>
          <Text  fontSize='18px' color='#9C92F8'> { `(${actors.length}) Actors`}</Text>
        </Flex>
        <Flex wrap='wrap' justifyContent={['center','center','space-between']} alignItems='center'>
          {
            actors.map((data) => <Card key={data.id.toString()} poster={data.poster_path || data.profile_path} rating= {data.vote_average || Math.round(data.popularity/10)} title={ data.title || data.name }/>)}
        </Flex>
      </Box>
      <Box bg='#121829CC' py={['40px','40px','40px']} mt='20px'>
        <Box px={['24px', '24px', '120px']} textAlign='center'>
          <Flex w='100%' justifyContent='center' alignItems='center' my='10px'>
            <Image alt='some image' src='/logo.svg' />
          </Flex>
          <Text color='#767e94;'> A personal project created by <Link href='https://draq.vercel.app' fontWeight='800' color='#9C92F8' isExternal> Abdullah Abdulfatah </Link>. Source Code available on <Link href='https://github.com/Draqode/flix' fontWeight='800' passHref color='#9C92F8' isExternal> Github</Link>and designed by <Link color='#9C92F8' fontWeight='800' href='https://pramodpoudel.com.np/' isExternal> Pramod Poudel </Link></Text>
        </Box>
      </Box>
    </Box>
  )
}


export async function getStaticProps() {
  const mov = await Axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.PRIVATE_KEY}&language=en-US&page=1`)
  const response = await mov.data.results

  return{
    props: {
      Data: response
    }
  }
}

