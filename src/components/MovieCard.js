import React from 'react'
import { Link } from 'react-router-dom';

import  tower from 'assets/architecture-1842324_640.jpg'

export const MovieCard = ({ movie_title, genre }) => {
    return(
      <section className="movie-detail">
          <Link to={`/movies/${movie_title}`}>
              <div className="overlay-container">
                <img src= {tower} alt ="disney castle" />
                  <div className="text-overlay">
                    <h1>{movie_title}</h1> 
                     <p>{genre}</p>
                  </div>
              </div>
            </Link>  
        </section>
    )
}

//
