
import './App.css';
import movies from './mocks/movies.json';
// eslint-disable-next-line no-unused-vars

function App() {

  const hasMovies = movies && movies.Search && movies.Search.length > 0;

  function MovieItem({movie}) {
    return (
      <li key={movie.imdbID}>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <img src={movie.Poster} alt={movie.Title} />
      </li>
      )
  }

  function NoResults(){
    return (
      <p>No movies result</p>
    )
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Search any movie</h1>
        <form className="form" action="">
          <input type="text" placeholder='Star Wars, Star Trek, Avengers' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {hasMovies? (
          <ul>
            {movies.Search.map((movie) => <MovieItem key={movie.imdbID} movie={movie}></MovieItem>)}
            </ul>)
        : (<NoResults></NoResults>)}
      </main>
    </div>
  )
}

export default App
