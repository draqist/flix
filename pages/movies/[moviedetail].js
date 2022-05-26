import { Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import  Axios  from "axios";
import Banner from "../../components/Banner";
import Details from "../../components/Details";
import Navbar from "../../components/Navbar";

const MovieDetail = ({ movDetail }) => {
  
  return ( 
    <Box bgImage='url("Background.svg")' bgColor='#121829'>
      <Navbar />
      <Box px={['20px', '20px', '70px']} pt='60px'>
        <Box w='100%' h={['', '', '', '', '480px']} my={['20px','20px','40px']}>
          <Banner title={movDetail.original_title} bck={movDetail.backdrop_path} />
        </Box>
        <Details type='Movie' tagline={movDetail.tagline} poster={movDetail.poster_path} overview={movDetail.overview} vote_average={movDetail.vote_average} release_date={movDetail.release_date} genres={movDetail.genres} runtime={ movDetail.runtime}/>
      </Box>
      <Box bg='#121829CC' py={['40px','40px','40px']} mt='20px'>
        <Box px={['24px', '24px', '120px']} textAlign='center'>
          <Flex w='100%' justifyContent='center' alignItems='center' my='10px'>
            <Image alt='some image' src='/logo.svg' />
          </Flex>
          <Text color='#767e94;'> A personal project engineered by <Link href='https://draq.vercel.app' fontWeight='800' color='#9C92F8' isExternal> Abdullah Abdulfatah [Draq] </Link>. Source Code available on <Link href='https://github.com/Draqode/flix' fontWeight='800' passHref color='#9C92F8' isExternal> Github</Link>and designed by <Link color='#9C92F8' fontWeight='800' href='https://pramodpoudel.com.np/' isExternal> Pramod Poudel </Link></Text>
        </Box>
      </Box>
    </Box>
  );
}

export default MovieDetail;

export async function getStaticPaths() { 
  try {
    const muv = await Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.PRIVATE_KEY}&language=en-US&page=1`)
    const res = await muv.data.results
    const moviePaths = res.map(movie => {
      return {
        params: {moviedetail: movie.id.toString()}
      }
    })
      return {
        paths: moviePaths,
        fallback: false
      }
  } catch (error) {
    console.log(error.message)
  }
}

export async function getStaticProps(context) {
  try {
    const id = context.params.moviedetail;
    const mov = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.PRIVATE_KEY}&language=en-US`) 
    const response = await mov.data
  
    return {
      props: {movDetail: response}
    }
    
  } catch (error) {
    console.log(error.message)
  }
}