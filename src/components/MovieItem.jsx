/* eslint-disable react/prop-types */
import './MovieItem.css';
export default function MovieItem({movie}) {
  const {poster, title, year, imdbID} = movie;
    return (
      <li key={imdbID} className='app-movie-item'>
        <h3 className='app-movie-item-title'>{title}</h3>
        <p className='app-movie-item-year'>{year}</p>
        <img src={poster} alt={title} className='app-movie-item-poster'/>
      </li>
      )
  }