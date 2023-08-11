import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import React from 'react';
import { SavedMoviesContext } from '../../../context/SavedMoviesContext';


function MoviesCardList(props) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const [defaultQuantity, setDefaultQuantity] = React.useState('');
  const [baseQuantity, setBaseQuantity] = React.useState('');
  const widthScreen = window.matchMedia('(min-width: 320px) and (max-width: 1280px)');
  const width320 = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
  const width768 = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');
  const width1280 = window.matchMedia('(min-width: 1280px)');

  React.useEffect(() => {
    checkWindowWidth();
  }, []);

  React.useEffect(() => {
    if (!(props.statusMovies === "saved")) {
      if (props.moviesList.length > 0) {
        localStorage.setItem('moviesList', JSON.stringify(props.moviesList));
      }
    }
  }, [props.moviesList]);

  widthScreen.addEventListener('change', function () {
    checkWindowWidth();
  });

  function checkWindowWidth() {
    if (width320.matches) {
      setBaseQuantity(5);
      setDefaultQuantity(5);
    } else if (width768.matches) {
      setBaseQuantity(8);
      setDefaultQuantity(8);
    } else if (width1280.matches) {
      setBaseQuantity(12);
      setDefaultQuantity(12);
    }
  }

  function showMoreCard() {
    if (defaultQuantity === 5)
      setBaseQuantity(baseQuantity + 5);
    else if (defaultQuantity === 8) {
      setBaseQuantity(baseQuantity + 8);
    } else if (defaultQuantity === 12) {
      setBaseQuantity(baseQuantity + 12);
    }
  }

  return (
    <section className="card-list">
      <div className="cards">
        {props.statusMovies === "saved" ?
          props.statusMoviesSearch ?
            props.searchedMovies.length === 0 ? 'Ничего не найдено' :
              props.searchedMovies.slice(0, baseQuantity).map((card) => (
                <MoviesCard title={card.nameRU} img={card.image} duration={card.duration} statusMovies="saved"
                  movie={card} key={card._id} handleDeleteMovie={props.handleDeleteMovie} setSavedMovies={props.setSavedMovies}
                  popupOpen={props.popupOpen} />
              )) :
            savedMovies === '' || savedMovies.length === 0 ? 'Ничего не добавленно' :
              savedMovies.slice(0, baseQuantity).map((card) => (
                <MoviesCard title={card.nameRU} img={card.image} duration={card.duration} statusMovies="saved"
                  movie={card} key={card._id} handleDeleteMovie={props.handleDeleteMovie} setSavedMovies={props.setSavedMovies}
                  popupOpen={props.popupOpen} />
              )) :
          props.moviesList === '' ? '' :
            props.moviesList.length === 0 ? 'Ничего не найдено' :
              props.moviesList.slice(0, baseQuantity).map((card) => (
                <MoviesCard title={card.nameRU} img={`https://api.nomoreparties.co${card.image.url}`} duration={card.duration}
                  handleSaveMovie={props.handleSaveMovie} movie={card} key={card.id} handleDeleteMovie={props.handleDeleteMovie}
                  setSavedMovies={props.setSavedMovies} popupOpen={props.popupOpen} />
              ))
        }
      </div>
      <button className={
        props.statusMovies === "saved" ? baseQuantity >= savedMovies.length ? "card-list__disabled" : "card-list__btn" :
          baseQuantity >= props.moviesList.length ? "card-list__disabled" : "card-list__btn"}
        onClick={showMoreCard} >Ещё</button>
    </section>
  );
}

export default MoviesCardList;