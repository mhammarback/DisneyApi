import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const { movie_title } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const DETAIL = `https://new-disney-api.herokuapp.com/movies/${movie_title}`
        fetch(DETAIL)
          .then((response) => response.json())
          .then((json) => {
              console.log(json)
              setMovie(json)
          })
          .catch((error) => {
              console.error('Request failed', console.error)
          })
    },[movie_title])

    return (
        <div>
            <p>{movie.movie_title}</p> 
            <p>{movie.genre}</p>
            <p>{movie.release_date}</p>
        </div>
    )
}