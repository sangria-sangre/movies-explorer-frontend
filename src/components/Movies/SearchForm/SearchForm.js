import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import loupe from '../../../images/icon__search.svg';
import { useValidator } from '../../../hooks/useValidator';

function SearchForm(props) {
  const { values, handleChange, inputVilidities } = useValidator();
  const [statusCheckbox, setStatusCheckbox] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);

  React.useEffect(() => {
    if ((localStorage.getItem('statusCheckbox'))) {
      setStatusCheckbox(JSON.parse(localStorage.getItem('statusCheckbox')));
    }
    setSubmit(false);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (values.film === '' || values.film === undefined || values.film.indexOf(' ') > -1) {
      props.popupOpen("badSearch");
    } else {
      props.onSubmit(values.film, statusCheckbox);
      setSubmit(true);
    }
  }

  function toggleCheckbox() {
    if (submit) {
      props.onSubmit(values.film, !statusCheckbox);
    }
    setStatusCheckbox(!statusCheckbox);
  }

  return (
    <div className="search-form">
      <form className={`search__form ${inputVilidities.film || inputVilidities.film === undefined ? "" : "search__form_error"}`} onSubmit={handleSubmit} action="get" name="search" noValidate>
        <input className="search__input"
          type="text" name="film" id="film" placeholder="Фильмы" minLength="1"
          value={values.film || ""} onChange={handleChange} required />
        <button className="search__btn" type="submit" >
          <img className="search__btn_img" src={loupe} alt="loupe" />
        </button>
      </form>
      <FilterCheckbox status={statusCheckbox} toggle={toggleCheckbox} />
    </div>
  );
}

export default SearchForm;