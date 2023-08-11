import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import { SavedMoviesContext } from '../../../context/SavedMoviesContext';
import { filterMovies } from '../../../utils/utils';
import mainApi from '../../../utils/MainApi';

function SavedMovies(props) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [statusMoviesSearch, setStatusMoviesSearch] = React.useState(false);
  const [searchedMovies, setSearchedMovies] = React.useState(false);

  React.useEffect(() => {
    mainApi.getMovies()
      .then((moviesList) => {
        props.setSavedMovies(moviesList);
      })
      .catch((err) => {
        console.log(err);
        props.popupOpen("serverError");
      })
    setStatusMoviesSearch(false);
  }, []);

  function handleSearchSaveMovie(data, statusCheckbox) {
    new Promise((resolve) => {
      setStatusMoviesSearch(true);
      resolve(setIsLoading(true));
    }).then(() => {
      setSearchedMovies(filterMovies(savedMovies, data, statusCheckbox));
    }).catch((err) => {
      console.log(err);
      props.popupOpen("serverError");
    })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Header login={props.loggedIn} main={false} />
      <SearchForm onSubmit={handleSearchSaveMovie} popupOpen={props.popupOpen} statusSaveSearch={false} />
      <Preloader status={isLoading} />
      {isLoading ? '' : <MoviesCardList statusMovies="saved" popupOpen={props.popupOpen}
        statusMoviesSearch={statusMoviesSearch} searchedMovies={searchedMovies} setSavedMovies={props.setSavedMovies} />}
      <Footer />
    </>
  );
}

export default SavedMovies;