/* eslint-disable no-unused-labels */

import debounce from 'just-debounce-it';
import { useCallback, useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
// eslint-disable-next-line no-unused-vars


function App() {
  // const inputRef = useRef(null);
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);
  const {movies, fetchMovies, loading} = useMovies({query: search, sort});
  const deboucedQuerying = useCallback(
    debounce(query => {
      fetchMovies({query});
    }, 300)
  , [fetchMovies]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovies({query: search});
  }

  const handleChange = (event) => {
    const {value} = event.target;
    if (value.startsWith(' ')) return;
    setSearch(value);
    deboucedQuerying(value);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <>
      <header>
        <h1>SAM!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className='app-search-container'>
            <input style={{border: error ? '1px solid red' : 'transparent'}} value={search} onChange={handleChange} name='query' type="text" placeholder='Star Wars, Star Trek, Avengers' />
            <label htmlFor="sort"></label>
            <input type="checkbox" name="sort" id="SortList" onChange={handleSort} checked={sort}/>
            <button type='submit'>Search</button>
          </div>
          <div className=''> { error && error  }</div>
        </form>
      </header>
      <main>
        { loading ? <p>Loading...</p> : <MoviesList movies={movies}></MoviesList> }
      </main>
      <footer className='app-footer'>Made with mind</footer>
    </>
  )
}

export default App
