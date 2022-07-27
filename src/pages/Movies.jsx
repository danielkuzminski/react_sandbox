import React, { useEffect, useState } from 'react'
import './Movies.css'
import MovieAddForm from '../components/MovieAddForm'
import { Link } from 'react-router-dom'
import { projectFirestore } from '../firebase/config'

export default function Movies() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('movies').get().then((snapshot) => {
      if(snapshot.empty){
        setError('No collection')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id:doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(error => {
      setError(error.message)
    })
  },[])


  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const handleDelete = (id) => {
    projectFirestore.collection('movies').doc(id).delete()
  }

  console.log(data);

  return (
    <div>
      <h1 className='movies-header'>Movies to watch</h1>
      <button className='btn-add-movie' onClick={handleShow} >Add movie</button>
      {isPending && <div className='pending'>Loading... </div>}
      {error}
      {show && <MovieAddForm handleShow={handleShow} />}
      {data && data.map((movie) => (
        <div className='movie-container' key={movie.slug}>
          <div className='movie-title-container'>
            <Link to={`/movie/${movie.id}`} className='movie-link'><h3>{movie.title}</h3></Link>
            <span className='btn-delete'><i class="fa-solid fa-trash-can" onClick={() => {handleDelete(movie.id)}}></i></span>
          </div>
          <h5>({movie.genre})</h5>
          <p className='movie-description'>{movie.description}</p>
        </div>
      ))}
    </div>
  )
}
