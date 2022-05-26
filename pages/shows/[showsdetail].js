import { Box, Flex, Image, Link, Text} from "@chakra-ui/react";
import  Axios  from "axios";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import TvDetails from "../../components/TvDetails";

const ShowDetail = ({showsDetail}) => {
  return ( 
    <Box bgColor='#121829' bgImage='url("Background.svg")'>
      <Navbar />
      <Box px={['20px', '20px', '70px']} pt='60px'>
        <Box w='100%' h={['', '', '', '', '480px']} my='40px'>
          <Banner title={showsDetail.original_name } bck={showsDetail.backdrop_path} />
        </Box>
        <TvDetails type='TV Show' tagline={showsDetail.tagline} poster={showsDetail.poster_path} overview={showsDetail.overview} vote_average={showsDetail.vote_average} release_date={showsDetail.first_air_date} lastdate={showsDetail.last_air_date} noSeasons={showsDetail.number_of_seasons} genres={showsDetail.genres} runtime={showsDetail.episode_run_time} status={showsDetail.status }/>
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
  );
}

export default ShowDetail;

export async function getStaticPaths() { 
  try { 
    const muv = await Axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.PRIVATE_KEY}&language=en-US&page=1`)
    const res = await muv.data.results
  
    const moviePaths = res.map(movie => {
      return {
        params: {showsdetail: movie.id.toString()}
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
    const id = context.params.showsdetail;
    const mov = await Axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.PRIVATE_KEY}&language=en-US`) 
    const response = await mov.data
  
    return {
      props: {showsDetail: response}
    }
  } catch (error) {
    console.log(error.message)
  }
}