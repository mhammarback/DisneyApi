import React, {useState, useEffect} from 'react'
import { MovieDetail } from './MovieDetail'

export const MovieLibrary = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
      const API = 'https://first-api-disney.herokuapp.com/movies'
      fetch(API)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setMovieList(json)
        })
        .catch((error) => {
            console.error('Request failed', console.error)
        })
  },[])

  return (
  <>
    <section className ="movie-list-container">
      {movieList.map((movie) => (
        <MovieDetail key= {movie.movie_title} movie={movie}/>
      ))}
    </section>
  </>
  )
}
