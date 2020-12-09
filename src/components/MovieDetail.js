import React from 'react'

import  tower from 'assets/architecture-1842324_640.jpg'

export const MovieDetail = ( { movie } ) => {
    return(
        <>
          <section className="movie-detail">
            <p>{movie.movie_title}</p> 
            <p>{movie.genre}</p>
            <p>{movie.release_date}</p>
            <img src= {tower} alt ="disney castle" />
          </section>
        </>
    )
}