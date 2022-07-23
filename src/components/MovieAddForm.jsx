import React, { useState } from 'react'
import './MovieAddForm.css'

export default function MovieAddForm({handleShow, addMovie}) {

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [description, setDescription] = useState('')
  const [slug, setSlug] = useState('')

  const resetForm = () => {
    setTitle('')
    setGenre('')
    setDescription('')
    setSlug('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const movie = {
      title,
      genre,
      description,
      slug
    }
    addMovie(movie)

    resetForm()

    handleShow()  
  }

  return (
    <div className='movie-add'>
      <button onclick={handleShow} className='close-form' onClick={handleShow} >X</button>
      <form className='add-form-container' onSubmit={handleSubmit}>
        <label>
          <span>Title: </span>
          <input type="text" required placeholder='please type title' onChange={(e) => {
            setTitle(e.target.value)
          }} />
        </label>
        <label>
          <span>Genre: </span>
          <input type="text" required placeholder='add movie genre' onChange={(e) => {
            setGenre(e.target.value)
          }}/>
        </label>
        <label>
          <span>Description: </span>
          <textarea required placeholder='add movie description' onChange={(e) => {
            setDescription(e.target.value)
          }}></textarea>
        </label>
        <label>
          <span>Slug: </span>
          <input type="text" required placeholder='please add proper slug' onChange={(e) => {
            setSlug(e.target.value)
          }} />
        </label>
        <button type='submit' className='btn-send-movie'>add</button>
      </form>
    </div>
  )
}
