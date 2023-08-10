import './MoviesCard.css';
import like from '../../../images/like.svg';
import likeActive from '../../../images/like-active.svg';
import iconDelete from '../../../images/card-delete.svg';
import React from 'react';
import { SavedMoviesContext } from '../../../context/SavedMoviesContext';

function MoviesCard(props) {
  const [statuslike, setStatuslike] = React.useState(props.movie.like);
  const savedMovies = React.useContext(SavedMoviesContext);

  function togleLike() {
    if (statuslike) {
      setStatuslike(false);
      const movie = savedMovies.find((movie) => {
        if (String(movie.movieId) === String(props.movie.id)) {
          return movie;
        }
      })
      props.handleDeleteMovie(movie._id);
    } else {
      setStatuslike(true);
      props.handleSaveMovie(props.movie);
    }
  }

  function deleteCard() {
    props.handleDeleteMovie(props.movie._id);
  }

  return (
    <article className="card">
      <img className="card__img" src={props.img} alt={props.title} />
      <div className="card__box">
        <h2 className="card__title">{props.title}</h2>
        {props.statusMovies === "saved" ?
          <img className="card__delete" src={iconDelete} alt="cors" onClick={deleteCard} />
          : <img className="card__like" onClick={togleLike} src={statuslike === true ? likeActive : like} alt="like" />
        }
        <p className="card__duration">
          {Math.floor(props.duration / 60) === 0 ? '' : Math.floor(props.duration / 60) + 'ч'}
          {props.duration % 60 > 0 ? ' ' + props.duration % 60 + 'м' : ''}</p>
      </div>
    </article>
  );
}

export default MoviesCard;