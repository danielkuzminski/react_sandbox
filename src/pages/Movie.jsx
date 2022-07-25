import React from 'react'
import { useParams } from 'react-router-dom'
import './Movie.css'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export default function Movie() {

  const {id} = useParams()

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('movies').doc(id).get().then((doc) => {
      if(doc.exists){
        setIsPending(false)
        setData(doc.data())
      } else {
        setIsPending(false)
        setError('no data')
      }
        })
      },[id])

      console.log(data);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error}
      {data && (
        <div>
          <h1 className='movies-header'>{data.title}</h1>
          <div className='single-movie-container'>
            <p>{data.description}</p>
            <img src={data.cover} alt="cover of a movie"/>
          </div>
        </div>
      )}
    </div>
  )
  }
