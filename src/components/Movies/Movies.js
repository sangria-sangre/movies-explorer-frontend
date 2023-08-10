import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';
import mainApi from '../../utils/MainApi';
import { SavedMoviesContext } from '../../context/SavedMoviesContext';

function Movies(props) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState('');
  const [moviesList, setMoviesList] = React.useState('');


  React.useEffect(() => {
    if (localStorage.getItem('request')) {
      if (localStorage.getItem('moviesList')) {
        new Promise((resolve, reject) => {
          resolve(setIsLoading(true));
        })
          .then(() => {
            let moviesList = JSON.parse(localStorage.getItem('moviesList'));
            let statusCheckbox = JSON.parse(localStorage.getItem('statusCheckbox'));
            let request = JSON.parse(localStorage.getItem('request'));
            setMovies(filterMovies(moviesList, request, statusCheckbox, savedMovies));
          })
          .catch((err) => {
            console.log(err);
            props.popupOpen("serverError");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [savedMovies]);


  function handleSearchMovie(data, statusCheckbox) {
    localStorage.setItem('statusCheckbox', JSON.stringify(statusCheckbox));
    localStorage.setItem('request', JSON.stringify(data));
    setIsLoading(true);
    console.log(moviesList);
    if(moviesList.length !== 100){
    moviesApi.getMovies()
      .then((moviesList) => {
        setMoviesList(moviesList);
        return moviesList;
      })
      .then((moviesList) => {
        setMovies(filterMovies(moviesList, data, statusCheckbox, savedMovies));
      })
      .catch((err) => {
        console.log(err);
        props.popupOpen("serverError");
      })
      .finally(() => {
        setIsLoading(false);
      });
    } else {
      setMovies(filterMovies(moviesList, data, statusCheckbox, savedMovies));
      setIsLoading(false);
    }

  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((res) => {
        props.setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
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
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <Header login={props.loggedIn} />
      <SearchForm onSubmit={handleSearchMovie} popupOpen={props.popupOpen} />
      <Preloader status={isLoading} />
      {isLoading ? '' : <MoviesCardList moviesList={movies} handleSaveMovie={handleSaveMovie} handleDeleteMovie={handleDeleteMovie} />}
      <Footer />
    </>
  );
}

export default Movies;