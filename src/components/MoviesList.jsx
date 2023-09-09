/* eslint-disable react/prop-types */
import MovieItem from "./MovieItem";
import './MoviesList.css';
import NoMovies from "./NoMovies";

export default function MoviesList({movies}){
  const hasMovies = movies && movies.length > 0;
  
    return(
      <section className="app-movies-list-container">
        {
                hasMovies ?  <ul className="app-movies-list-wrapper">{
                  movies.map((movie) => (<MovieItem key={movie.imdbID} movie={movie}></MovieItem>))
                }</ul> : <NoMovies></NoMovies>
        }
      </section>
    )
}