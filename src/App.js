import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';

function App() {


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
            <Movies />
          </Route>
          <Route path='/movie/:id'>
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
