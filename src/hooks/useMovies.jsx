/* eslint-disable no-unused-labels */
import { useCallback, useMemo, useRef, useState } from 'react';
import { getMovies } from '../services/omdbapi';

export function useMovies({query, sort}) {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);  
  const [totalResults, setTotalResults] = useState(0);
  const previousQuery = useRef(query);

  const fetchMovies = useCallback(async ({query}) => {
    if (query === previousQuery.current) return;
    try {
      previousQuery.current = query;
      setLoading(true);
      setError(null);
      const res = await getMovies({query});
      setTotalResults(res.length);
      setMovies(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // const output = sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies;
  const output = useMemo(() => sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies, [movies, sort]);
    
  return {movies: output, fetchMovies, error, loading, totalResults}
}
