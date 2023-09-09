export const getMovies = async ({query}) => {

    const API_KEY = import.meta.env.VITE_API_KEY_OMDB;
    
    if (query === '') return null;
    try {
        
        const REQUEST_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
        const response = await fetch(REQUEST_URL)
        const data = await response.json()
        const movies = data?.Search?.map((movie)=> ({
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            imdbID: movie.imdbID
        }))

        return movies;
    } catch (error) {
        throw new Error('Error fetching movies')
    }
  }