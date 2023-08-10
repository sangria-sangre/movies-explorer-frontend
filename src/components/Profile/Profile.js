import './Profile.css'
import Header from '../Header/Header'
import React from 'react';
import { Link } from 'react-router-dom';
import { useValidator } from '../../hooks/useValidator';
import mainApi from '../../utils/MainApi';
import { UserDataContext } from '../../context/UserDataContext';

function Profile(props) {
  const defaultUserData = React.useContext(UserDataContext);
  const [inputStatus, setInputStatus] = React.useState(true);
  const { values, handleChange, errors, inputVilidities } = useValidator();
  const [userInfo, setUserInfo] = React.useState('');

  React.useEffect(() => {
    if (userInfo === '') {
      mainApi.postUserInfo(values.email, values.text)
        .then((data) => {
          localStorage.setItem('userData', JSON.stringify(data));
          setUserInfo(data);
          props.popupOpen('saveDataProfile')
        })
        .catch(err => {
          console.log(err);
        });
    }
    setUserInfo(JSON.parse(localStorage.getItem('userData')));
  }, []);

  function onSignOut() {
    localStorage.clear();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputStatus) {
      mainApi.postUserInfo(values.email, values.text)
        .then((data) => {
          localStorage.setItem('userData', JSON.stringify(data));
          setUserInfo(data);
          props.popupOpen('saveDataProfile')
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (inputStatus) {
      setInputStatus(false);
    } else {
      setInputStatus(true);
    }
  }

  return (
    <>
      <Header login={props.loggedIn} />
      <section className="profile">
        <h2 className="profile__title">Привет, {values.text  ||  defaultUserData.name}!</h2>
        <form className="profile__form" name="profile" action="get" noValidate >
          <h3 className="profile__form_title">Имя</h3>
          <input type="text" name="text" id="text" required minLength="2" maxLength="40"
            onChange={handleChange} value={values.text || defaultUserData.name || ''}
            className={`profile__form_input ${inputVilidities.text || inputVilidities.text === undefined ? "" : "profile__input_error"}`}
            placeholder="Имя" readOnly={inputStatus} />
          <span className="profile__form_error">{errors.text}</span>

          <p className="profile__form_line"></p>

          <h3 className="profile__form_title">E-mail</h3>
          <input type="email" name="email" id="email" required minLength="2" maxLength="40"
            onChange={handleChange} value={values.email || defaultUserData.email || ''}
            className={`profile__form_input ${inputVilidities.email || inputVilidities.email === undefined ? "" : "profile__input_error"}`}
            placeholder="Email" readOnly={inputStatus} />
          <span className="profile__form_error  profile__form_error-email">{errors.email}</span>
        </form>
        <button className={`profile__btn ${inputStatus ? "profile__btn-edit" : "profile__btn-save"}
        ${(inputStatus ? '' : defaultUserData.email === values.email || values.email === undefined) && (defaultUserData.name === values.text || values.text === undefined) ? "profile__btn-save_disabled" : ""}`} type='submit' onClick={handleSubmit}>
          {inputStatus ? "Редактировать" : "Сохранить"}
        </button>
        <Link className="profile__btn profile__btn-exit" onClick={onSignOut} to="/signin">Выйти из аккаунта</Link>
      </section>
    </>
  );
}

export default Profile;
//${values.email === defaultUserData.email & values.text === defaultUserData.name ? "profile__btn-save_disabled" : ""}