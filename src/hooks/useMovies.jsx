/* eslint-disable no-unused-labels */
import moviesRes from '../mocks/movies.json';
export function useMovies() {
    const movies = moviesRes?.Search.map((movie)=> ({
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbID: movie.imdbID
    }))
    return {movies}
  }

//how to win 500 usd in 5 minutes