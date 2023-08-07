import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import loupe from '../../../images/icon__search.svg';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search__form">
        <input className="search__input" type="text" required placeholder="Фильмы"/>
        <button className="search__btn" type="submit">
          <img className="search__btn_img" src={loupe} alt="loupe" />
        </button>
      </form>
      <FilterCheckbox/>
    </div>
  );
}

export default SearchForm;