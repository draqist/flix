import { Box} from "@chakra-ui/react";
import  Axios  from "axios";
import Banner from "../../components/Banner";
import Details from "../../components/Details";
import Navbar from "../../components/Navbar";

const MovieDetail = ({showsDetail}) => {
  return ( 
    <Box bgColor='#121829' bgImage='url("Background.svg")'>
      <Navbar />
      <Box px={['20px', '20px', '70px']} pt='60px'>
        <Box w='100%' h={['', '', '', '', '480px']} my='40px'>
          <Banner title={showsDetail.original_name } bck={showsDetail.backdrop_path} />
        </Box>
        <Details type ='TV Show' tagline={showsDetail.tagline} poster={showsDetail.poster_path} overview={showsDetail.overview} vote_average={showsDetail.vote_average} release_date={showsDetail.release_date} genres={showsDetail.genres} runtime={ showsDetail.runtime}/>
      </Box>
    </Box>
  );
}

export default MovieDetail;

export async function getStaticPaths() { 
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
}

export async function getStaticProps(context) {
  const id = context.params.showsdetail;
  const mov = await Axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.PRIVATE_KEY}&language=en-US`) 
  const response = await mov.data

  return {
    props: {showsDetail: response}
  }
}