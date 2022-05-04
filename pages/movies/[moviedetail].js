import { Box} from "@chakra-ui/react";
import  Axios  from "axios";
import Banner from "../../components/Banner";
import Details from "../../components/Details";
import Navbar from "../../components/Navbar";

const MovieDetail = ({movDetail}) => {
  return ( 
    <Box bgColor='#121829' bgImage='url("Background.svg")'>
      <Navbar />
      <Box px={['20px', '20px', '70px']} pt='60px'>
        <Box w='100%' h={['', '', '', '', '480px']} my={['20px','20px','40px']}>
          <Banner title={movDetail.original_title} bck={movDetail.backdrop_path} />
        </Box>
        <Details type='Movie' tagline={movDetail.tagline} poster={movDetail.poster_path} overview={movDetail.overview} vote_average={movDetail.vote_average} release_date={movDetail.release_date} genres={movDetail.genres} runtime={ movDetail.runtime}/>
      </Box>
    </Box>
  );
}

export default MovieDetail;

export async function getStaticPaths() { 
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
}

export async function getStaticProps(context) {
  const id = context.params.moviedetail;
  const mov = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.PRIVATE_KEY}&language=en-US`) 
  const response = await mov.data

  return {
    props: {movDetail: response}
  }
}