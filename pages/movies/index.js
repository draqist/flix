/*eslint-disable react/no-children-prop */
import { Box, Flex, Heading, Link, Input, InputGroup, InputLeftElement,Image, Text, Button } from "@chakra-ui/react"
import { RiSearch2Line } from "react-icons/ri"
import Navbar from "../../components/Navbar"
import Axios from 'axios'
import Card from "../../components/Card"
import { useState } from "react";
import NextLink from "next/link";


export default function Movies({ Data }) {
  const [movies, setMovies] = useState(Data);
  const [val, setVal] = useState("");
  const [fade, setFade] = useState(false);

  async function searchFetch() {
    const movSearch = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&query=${val}&page=1&include_adult=false`)
    const movSearchRes = await movSearch.data.results
    setMovies(movSearchRes)
  }

  return (
    <Box bgImage='url("Background.svg")' w='100%' bgColor='#121829'>
      <Navbar />
      <Box px={['20px', '20px', '50px', '50px', '70px']} pt='80px'>
        <Box w={['', '', '500px']} pt={['20px', '20px', '50px', '50px','120px']} pb='20px' >
          <Text fontSize='16px' color='#BEB7FB'>Flix</Text>
          <Heading fontSize='64px' fontWeight='600' color='#EBEEF5'>  Movies </Heading>
        </Box>

        <Box d='flex' gap={'1rem'} alignItems='flex-end'>
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
                setFade(true)
                searchFetch()
              }}
              value={val}
              _placeholder={{color:'#475069', fontSize:'16px', fontWeight: '400' }}
              border='1px solid #323B54'
              bg='#0000001A'
              focusBorderColor='none'
              color='white' h='64px' placeholder='Search Movies or TV Shows' fontSize='20px' fontWeight='' borderColor='#323B54' />
          </InputGroup>
          {/* {
            fade && <Button h='64px' w='108px'bgColor='#9C92F8' onClick= {searchFetch()}> Search</Button>
          } */}
        </Box>
      </Box>
      <Box px={['20px','20px','50px','50px','70px']} w='100%' mt='48px' pb='28px'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Text fontSize='24px' color='#ebeef5' fontWeight='600'> Now Playing</Text>
          <Text  fontSize='18px' color='#9C92F8'> { `(${Data.length}) Movies`}</Text>
        </Flex>
        <Flex wrap={['nowrap','nowrap','wrap','wrap','wrap']} overflow={['scroll','scroll','hidden']} justifyContent={['center','center','space-between']} alignItems='center'>
          {
            movies.map((data) => (
              <NextLink key={data.id.toString()} href={'/movies/' +data.id} passHref>
                <Link >
                  <Card key={data.id.toString()} poster={data.poster_path} rating={data.vote_average} title={data.title || data.name} />
                </Link>
              </NextLink>
            ))}
        </Flex>
      </Box>
      <Box bg='#121829CC' py={['40px','40px','40px']} mt='20px'>
        <Box px={['24px', '24px', '120px']} textAlign='center'>
          <Flex w='100%' justifyContent='center' alignItems='center' my='10px'>
            <Image alt='some image' src='/logo.svg' />
          </Flex>
          <Text color='#767e94;'> A personal project engineered by <Link href='https://draq.vercel.app' fontWeight='800' passHref color='#9C92F8' isExternal> Abdullah Abdulfatah </Link>. Source Code available on <Link href='https://github.com/Draqode/flix' fontWeight='800' passHref color='#9C92F8' isExternal> Github</Link>and designed by <Link color='#9C92F8' fontWeight='800' href='https://pramodpoudel.com.np/' isExternal> Pramod Poudel </Link></Text>
        </Box>
      </Box>
    </Box>
  )
}



export async function getStaticProps() {
  const mov = await Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.PRIVATE_KEY}&language=en-US&page=1`)
  const response = await mov.data.results

  return{
    props: {
      Data: response
    }
  }
}