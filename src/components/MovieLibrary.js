import React, {useState, useEffect} from 'react'
import { MovieCard } from './MovieCard'

export const MovieLibrary = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
      const API = 'https://new-disney-api.herokuapp.com/movies'
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
        <MovieCard key= {movie.total_gross} {...movie}/>
      ))}
    </section>
  </>
  )
}
