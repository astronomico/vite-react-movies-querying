/* eslint-disable no-unused-labels */

import { useRef, useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import { useMovies } from './hooks/useMovies';
// eslint-disable-next-line no-unused-vars

function App() {
  const inputRef = useRef(null);
  const {movies} = useMovies();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!query){
      setError('Please enter a movie name');
      return;
    }

    if(query.length < 3){
      setError('Please enter at least 3 characters');
      return;
    }

    setError(null);
    
  }

  const handleChange = (event) => {
    const {value} = event.target;
    setQuery(value);
  }

  return (
    <>
      <header>
        <h1>SAM!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className='app-search-container'>
            <input value={query} onChange={handleChange} name='query' type="text" placeholder='Star Wars, Star Trek, Avengers' content={inputRef.current?.value ?? undefined}/>
            <button type='submit'>Search</button>
          </div>
          {/* <div className=''> {movies ? `Showing ${movies.length} results` : error }</div> */}
          <div className=''> { error && error  }</div>
        </form>
      </header>
      <main>
        <MoviesList movies={movies}></MoviesList>
      </main>
      <footer className='app-footer'>Made with lavarropas</footer>
    </>
  )
}

export default App
