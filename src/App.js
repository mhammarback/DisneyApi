import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieLibrary } from './components/MovieLibrary'
import { MovieDetail } from './components/MovieDetail'
import { Nav } from './components/Nav'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
      <Route path="/">
        <MovieLibrary/> 
      </Route>
      <Route path="/movies/:movie">
       <MovieDetail />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
