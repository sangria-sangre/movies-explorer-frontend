import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <>
      <Header login={true} />
      <SearchForm />
      <Preloader status={false} />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;