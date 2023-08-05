import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <>
      <Header login={props.login} main={false} />
      <SearchForm />
      <Preloader status={false} />
      <MoviesCardList statusMovies="saved" />
      <Footer />
    </>
  );
}

export default SavedMovies;