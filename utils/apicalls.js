import Axios from 'axios';

const MovieDataFetcher = async () => { 
  const result = await Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=98750334fac1aaa94aca2b7a98d59728&language=en-US&page=1")
  const res = result.data.results
  console.log(res)
  return res
}

export { MovieDataFetcher };