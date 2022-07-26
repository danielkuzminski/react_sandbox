import React, { useState } from 'react';
import './MovieAddForm.css';
import { projectFirestore } from '../firebase/config';
import { useHistory } from 'react-router-dom';

export default function MovieAddForm({ handleShow, addMovie }) {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [year, setYear] = useState(null);
  const [cover, setCover] = useState('');

  const resetForm = () => {
    setTitle('');
    setGenre('');
    setDescription('');
    setSlug('');
    setYear(null);
    setCover('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title,
      genre,
      description,
      slug,
      year,
      cover,
    };

    try {
      await projectFirestore.collection('movies').add(doc);
      history.push('/movies');
    } catch (err) {
      console.log(err);
    }

    resetForm();

    handleShow();
  };

  return (
    <div className='movie-add'>
      <button onclick={handleShow} className='close-form' onClick={handleShow}>
        X
      </button>
      <form className='add-form-container' onSubmit={handleSubmit}>
        <label>
          <span>Title: </span>
          <input
            type='text'
            required
            placeholder='please type title'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Genre: </span>
          <input
            type='text'
            required
            placeholder='add movie genre'
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Description: </span>
          <textarea
            required
            placeholder='add movie description'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </label>
        <label>
          <span>Slug: </span>
          <input
            type='text'
            required
            placeholder='please add proper slug'
            onChange={(e) => {
              setSlug(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Year: </span>
          <input
            type='number'
            required
            placeholder='put year'
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Cover link: </span>
          <input
            type='text'
            required
            placeholder='add cover link'
            onChange={(e) => {
              setCover(e.target.value);
            }}
          />
        </label>
        <button type='submit' className='btn-send-movie'>
          add
        </button>
      </form>
    </div>
  );
}
