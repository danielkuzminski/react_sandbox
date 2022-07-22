import React from 'react'
import './MovieAddForm.css'

export default function MovieAddForm() {
  return (
    <div className='movie-add'>
      <form className='add-form-container'>
        <label>
          <span>Title: </span>
          <input type="text" placeholder='please type title'/>
        </label>
        <label>
          <span>Genre: </span>
          <input type="text" placeholder='add movie genre'/>
        </label>
        <label>
          <span>Description: </span>
          <textarea placeholder='add movie description'></textarea>
        </label>
        <label>
          <span>Slug: </span>
          <input type="text" placeholder='please add proper slug'/>
        </label>
        <button className='btn-send-movie'>add</button>
      </form>
    </div>
  )
}
