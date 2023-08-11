import React from 'react';
import { Link } from 'react-router-dom';
import { useValidator } from '../../hooks/useValidator';
import { UserDataContext } from '../../context/UserDataContext';
import './Profile.css'
import Header from '../Header/Header'
import mainApi from '../../utils/MainApi';
import { PATTERN_EMAIL } from '../../constants/constants'

function Profile(props) {
  const defaultUserData = React.useContext(UserDataContext);
  const [inputStatus, setInputStatus] = React.useState(true);
  const { values, handleChange, errors, inputVilidities } = useValidator();
  const [dataUserBeforePost, setdataUserBeforePost] = React.useState('');

  React.useEffect(() => {
    setdataUserBeforePost(defaultUserData);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputStatus) {
      if (values.text === undefined) {
        values.text = dataUserBeforePost.text;
      } else if (values.email === undefined) {
        values.email = dataUserBeforePost.email;
      }
      mainApi.postUserInfo(values.email, values.text)
        .then((data) => {
          localStorage.setItem('userData', JSON.stringify(data));
          props.setUserData(data);
          props.popupOpen('saveDataProfile');
          return data;
        })
        .then((data) => {
          setdataUserBeforePost(data);
        })
        .catch(err => {
          console.log(err);
          props.popupOpen("serverError");
        })
        .finally(() => {
          setInputStatus(true);
        });
    } else {
      setInputStatus(false);
    }
  }

  return (
    <>
      <Header login={props.loggedIn} />
      <section className="profile">
        <h2 className="profile__title">Привет, {dataUserBeforePost.name}!</h2>
        <form className="profile__form" name="profile" action="get" noValidate >
          <h3 className="profile__form_title">Имя</h3>
          <input type="text" name="text" id="text" required minLength="2" maxLength="40"
            onChange={handleChange} value={values.text || dataUserBeforePost.name || ''}
            className={`profile__form_input ${inputVilidities.text || inputVilidities.text === undefined ? "" : "profile__input_error"}`}
            placeholder="Имя" readOnly={inputStatus} />
          <span className="profile__form_error">{errors.text}</span>

          <p className="profile__form_line"></p>

          <h3 className="profile__form_title">E-mail</h3>
          <input type="email" name="email" id="email" required minLength="2" maxLength="40"
            onChange={handleChange} value={values.email || dataUserBeforePost.email || ''}
            className={`profile__form_input ${inputVilidities.email || inputVilidities.email === undefined ? "" : "profile__input_error"}`}
            placeholder="Email" readOnly={inputStatus} pattern={PATTERN_EMAIL} />
          <span className="profile__form_error  profile__form_error-email">{errors.email}</span>
        </form>
        <button className={`profile__btn ${inputStatus ? "profile__btn-edit" : "profile__btn-save"}
        ${(inputStatus ? '' : defaultUserData.email === values.email || values.email === undefined) && (defaultUserData.name === values.text || values.text === undefined) ? "profile__btn-save_disabled" : ""}`} type='submit' onClick={handleSubmit}>
          {inputStatus ? "Редактировать" : "Сохранить"}
        </button>
        <Link className="profile__btn profile__btn-exit" onClick={props.handleSignOut} to="/">Выйти из аккаунта</Link>
      </section>
    </>
  );
}

export default Profile;
//${values.email === defaultUserData.email & values.text === defaultUserData.name ? "profile__btn-save_disabled" : ""}