import React from 'react'
import './Movies.css'
import MovieAddForm from '../components/MovieAddForm'

export default function Movies({movies}) {
  return (
    <div>
      <h1 className='movies-header'>Movies to watch</h1>
      <button className='btn-add-movie'>Add movie</button>
      <MovieAddForm />
      {movies.map((movie) => (
        <div className='movie-container' key={movie.slug}>
          <h3>{movie.title}</h3>
          <h5>({movie.genre})</h5>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  )
}
