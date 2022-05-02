import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Axios from 'axios'
import Link from 'next/link';



export default function Home({ movieData, showsData, allData }) {
  
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
        <Hero />
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
                      <Link key={movie.id.toString()} href={'/movies/' + movie.id} passHref>
                      <Card key={movie.id.toString()} poster={movie.poster_path} rating= {movie.vote_average} title={ movie.title || movie.name }/>    
                    </Link>
                    ))
                }
              </Flex>
            </TabPanel>
            <TabPanel>
              <Text fontSize='20px' color='#A8AEBF' mt='1rem'> TV Shows {`(${showsData.length})`}</Text>
            <Flex wrap='wrap' justifyContent={['center','center','space-between']} alignItems='center'>
              {
                showsData.map((show) => <Card key={show.id.toString()} rating= {show.vote_average} poster={show.poster_path} title={ show.title || show.name }/>)
                }
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
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