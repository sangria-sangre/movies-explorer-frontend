import './MoviesCard.css';
import like from '../../../images/like.svg';
import likeActive from '../../../images/like-active.svg';
import iconDelete from '../../../images/card-delete.svg';
import React from 'react';

function MoviesCard(props) {
  const [statuslike, setStatuslike] = React.useState(props.like);

  function togleLike() {
    console.log('h');
    if (statuslike) {
      setStatuslike(false);
    } else {
      setStatuslike(true);
    }
  }

  return (
    <article className="card">
      <img className="card__img" src={props.img} alt={props.title} />
      <div className="card__box">
        <h2 className="card__title">{props.title}</h2>
        {props.statusMovies === "saved" ?
          <img className="card__delete" src={iconDelete} alt="cors"/>
          : <img className="card__like" src={statuslike ? likeActive : like} alt="like" onClick={togleLike} />
        }
        <p className="card__duration">{props.duration}</p>
      </div>
    </article>
  );
}

export default MoviesCard;