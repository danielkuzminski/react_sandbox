import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState([
    {title: "hurt locker", genre: "war, drama", slug: "hurt_locker", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis non dolores accusantium! Sint tempore culpa iure necessitatibus temporibus debitis."},
    {title: "dredd", genre: "comics, sci-fi", slug: "dredd", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {title: "hateful eight", genre: "western", slug: "hateful_eight", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis non dolores accusantium! Sint tempore culpa iure necessitatibus temporibus debitis."}
  ])

  const addMovie = (movies) => {
    setMovies((prevMovies) => {
      return [...prevMovies, movies]
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/movies'>
            <Movies movies={movies} addMovie={addMovie} />
          </Route>
          <Route path='/movie/:slug'>
            <Movie />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
