/*eslint-disable react/no-unescaped-entities, react/no-children-prop*/
import { Box, Flex, Tab, TabList, Link,TabPanel,Heading, TabPanels, Tabs, Text, InputGroup, InputLeftElement, Input,Modal,ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, useDisclosure, Image, } from '@chakra-ui/react';
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Axios from 'axios'
import NextLink from 'next/link';
import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri'
import '../styles/global.css'


export default function Home({ movieData, showsData, allData }) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [all, setAll] = useState(allData);  
  const [val, setVal] = useState("");

  async function searchFetch() {
    const actorSearch = await Axios.get(`https://api.themoviedb.org/3/search/multi?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&query=${val}&page=1&include_adult=false`)
    const actorSearchRes = await actorSearch.data.results
    setAll(actorSearchRes)
  }
  /* This line would have ben the code without SSR in Nextjs */
  // const [movies, setMovies] = useState([]);
  // useEffect(() => { 
  //     const newResult = async () => {
  //     const movieData = await MovieDataFetcher();
  //     console.log(movieData)
  //     setMovies(movieData)
  //   }
  //   newResult()
  // }, [])
  return (
    <Box bgImage='url("Background.svg")' w='100%' bgColor='#121829'>
      <Navbar />
      <Box px={['20px','20px','70px']}>
        {/* <Hero /> */}
        <Box w={['','','500px']} pt={['80px','90px', '100px', '120px']} pb='20px' >
      <Heading color='#EBEEF5' fontWeight='600' fontSize='64px' textAlign={['justify', 'justify', 'left']}> Flix</Heading>
      <Text fontSize='16px' fontWeight='400' color='#8E95A9'> A web app where you can search for info about your favorite movies, tv shows and actors 😉. If there's a particular movie that you can't find, shoot me a <Text as='span' color='#9C92F8'>mail</Text> </Text>
        {/* <Box as='button' variant='' px='10px' onClick={() => onOpen()} borderRadius='12px' d='flex'h='64px' w={['100%','100%','348px']} mt='24px' alignItems='center' justifyContent='unset' bg='#0000001A' border='1px solid #323B54'>
          <RiSearch2Line color='#475069' fontSize='24px' pl='10px' />
          <Flex color='#475069' ml='8px' fontWeight='400' fontSize='14px'>
            Search Movies or TV Shows...
          </Flex> 
      </Box> */}
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
        <Box mt='60px' >
          <Tabs
            variant='unstyled'>
          <TabList bg='#00000033' justifyContent='space-between' borderRadius='12px' color='#8E95A9' w={['100%','100%','368px']} p='8px'>
              <Tab
                w='85px'
                borderRadius='8px'
              fontWeight='600'
              fontSize='16px'
              _selected={{
                bg: '#7B6EF6',
                color: 'white'
              }}
              _active={{
                focusBorderColor:'none',
                }}
                > All</Tab>
              <Tab
                pr='12px'
              borderRadius='8px'
              focusBorderColor='none'
              fontWeight='600'
              fontSize='16px'
              _selected={{
                bg: '#7B6EF6',
              color: 'white'
            }}> Movies </Tab>
            <Tab
              borderRadius='8px'
              focusBorderColor='none'
              fontWeight='600'
              fontSize='16px'
              _selected={{
                bg: '#7B6EF6',
                color: 'white',
              }}>TV Shows</Tab>
            </TabList>
          <TabPanels >
            <TabPanel>
              <Text fontWeight='600' fontSize='20px' color='#A8AEBF' mt='1rem'> All {`(${allData.length})`}</Text>
              <Flex wrap='wrap' justifyContent={['center','center','space-between']} alignItems='center'>
              {
                allData.map((all) => <Card key={all.id.toString()} poster={all.poster_path} rating= {all.vote_average} title={ all.title || all.name }/>)
              }
              </Flex>
            </TabPanel>
            <TabPanel>
              <Text fontSize='20px' color='#A8AEBF' mt='1rem'> Movies {`(${movieData.length})`}</Text>
            <Flex wrap='wrap' justifyContent={['center','center','space-between']} alignItems='center'>
              {
                    movieData.map((movie) => (
                      <NextLink key={movie.id.toString()} href={`/movies/${movie.id}`} passHref>
                        <Link>
                          <Card key={movie.id.toString()} poster={movie.poster_path} rating= {movie.vote_average} title={ movie.title || movie.name }/>    
                        </Link>
                    </NextLink>
                    ))
                }
              </Flex>
            </TabPanel>
            <TabPanel>
              <Text fontSize='20px' color='#A8AEBF' mt='1rem'> TV Shows {`(${showsData.length})`}</Text>
            <Flex wrap='wrap' justifyContent={['center','center','space-between']} alignItems='center'>
              {
                    showsData.map((show) => (
                      <NextLink key={show.id.toString()} href={`/shows/${show.id}`} passHref>
                        <Link >
                          <Card key={show.id.toString()} rating={show.vote_average} poster={show.poster_path} title={show.title || show.name} />
                        </Link>
                      </NextLink>
                    ))
                }
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
      </Box>
      <Box bg='#121829CC' py={['40px','40px','40px']} mt='20px'>
        <Box px={['24px', '24px', '120px']} textAlign='center'>
          <Flex w='100%' justifyContent='center' alignItems='center' my='10px'>
            <Image alt='some image' src='/logo.svg' />
          </Flex>
          <Text color='#767e94;'> A personal project created by <Link href='https://draq.vercel.app' fontWeight='800' passHref color='#9C92F8' isExternal> Abdullah Abdulfatah </Link>. Source Code available on <Link href='https://github.com/Draqode/flix' fontWeight='800' passHref color='#9C92F8' isExternal> Github</Link > and designed by <Link color='#9C92F8' fontWeight='800' href='https://pramodpoudel.com.np/' isExternal> Pramod Poudel </Link></Text>
        </Box>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  const movresult = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.PRIVATE_KEY}&language=en-US&page=1`)

  const shows = await Axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.PRIVATE_KEY}&language=en-US&page=1`)
  const showsres = await shows.data.results
  const res = await movresult.data.results
  let combinedRes = []
  combinedRes = [...showsres, ...res]
  return {
    props: {
      movieData: res,
      showsData: showsres,
      allData: combinedRes
    }
  }
}