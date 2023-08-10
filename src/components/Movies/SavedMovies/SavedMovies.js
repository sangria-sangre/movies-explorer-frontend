import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';
import mainApi from '../../../utils/MainApi';
import { SavedMoviesContext } from '../../../context/SavedMoviesContext';
import { filterMovies } from '../../../utils/utils';

function SavedMovies(props) {
  const savedMovies = React.useContext(SavedMoviesContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [statusMoviesSearch, setStatusMoviesSearch] = React.useState(false);
  const [searchedMovies, setSearchedMovies] = React.useState(false);

  React.useEffect(() => {
    setStatusMoviesSearch(false);
  }, []);

  function handleSearchSaveMovie(data, statusCheckbox) {
    new Promise((resolve, reject) => {
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
      <Header login={props.loggedIn} main={false} />
      <SearchForm onSubmit={handleSearchSaveMovie} popupOpen={props.popupOpen} />
      <Preloader status={isLoading} />
      {isLoading ? '' : <MoviesCardList statusMovies="saved" handleDeleteMovie={handleDeleteMovie}
      statusMoviesSearch={statusMoviesSearch} searchedMovies={searchedMovies}/>}
      <Footer />
    </>
  );
}

export default SavedMovies;