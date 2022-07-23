import React, { useState } from 'react'
import './Movies.css'
import MovieAddForm from '../components/MovieAddForm'
import { Link } from 'react-router-dom'

export default function Movies({movies, addMovie}) {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <h1 className='movies-header'>Movies to watch</h1>
      <button className='btn-add-movie' onClick={handleShow} >Add movie</button>
      {show && <MovieAddForm addMovie={addMovie} handleShow={handleShow} />}
      {movies.map((movie) => (
        <div className='movie-container' key={movie.slug}>
          <Link to={`/movie/${movie.slug}`} className='movie-link'><h3>{movie.title}</h3></Link>
          <h5>({movie.genre})</h5>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  )
}
