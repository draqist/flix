//import Axios from 'axios';

const MovieDataFetcher = async () => { 
  const result = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1`)
  const res = result.data.results
  return res
}
const SeriesDataFetcher = async () => {
  const shows = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1`)
  const showsres = await shows.data.results
  
}
export { MovieDataFetcher,SeriesDataFetcher };