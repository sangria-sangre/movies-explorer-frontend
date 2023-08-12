import './MoviesCard.css';
import like from '../../../images/like.svg';
import likeActive from '../../../images/like-active.svg';
import iconDelete from '../../../images/card-delete.svg';
import React from 'react';
import mainApi from '../../../utils/MainApi';
import { SavedMoviesContext } from '../../../context/SavedMoviesContext';

function MoviesCard(props) {
  const [statuslike, setStatuslike] = React.useState(props.movie.like);
  const savedMovies = React.useContext(SavedMoviesContext);

  function togleLike() {
    if (statuslike) {
      const movie = savedMovies.find((movie) => {
        if (String(movie.movieId) === String(props.movie.id)) {
          return movie;
        }
      })
      handleDeleteMovie(movie._id);
    } else {
      handleSaveMovie(props.movie);
    }
  }

  function deleteCard() {
    handleDeleteMovie(props.movie._id);
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteMovie(movieId)
      .then((res) => {
        let arr = savedMovies.filter((movie) => {
          if (movie._id !== res._id) {
            return movie;
          }
          return;
        });
        props.setSavedMovies(arr);
        setStatuslike(false);
      })
      .catch((err) => {
        console.log(err);
        props.popupOpen("serverError");
      })
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((res) => {
        setStatuslike(true);
        props.setSavedMovies([res, ...savedMovies]);
        console.log(res, savedMovies);
      })
      .catch((err) => {
        console.log(err);
        props.popupOpen("serverError");
      })
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