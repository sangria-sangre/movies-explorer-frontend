import './Profile.css'
import Header from '../Header/Header'
import React from 'react';
import { useValidator } from '../../hooks/useValidator';

function Profile() {

  const [inputStatus, setInputStatus] = React.useState(true);
  const { values, handleChange, errors, inputVilidities } = useValidator();


  function inputToggle() {
    if (inputStatus) {
      setInputStatus(false)
    } else {
      setInputStatus(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Header login={true} />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form" action="get" noValidate onSubmit={handleSubmit} >
          <h3 className="profile__form_title">Имя</h3>
          <input type="text" name="text" id="text" required minLength="2" maxLength="40"
            onChange={handleChange} value={values.text || "Виталий"}
            className={`profile__form_input ${inputVilidities.text || inputVilidities.text === undefined ? "" : "profile__input_error"}`}
            placeholder="Имя" readOnly={inputStatus} />
          <span className="profile__form_error">{errors.text}</span>

          <p className="profile__form_line"></p>

          <h3 className="profile__form_title">E-mail</h3>
          <input type="email" name="email" id="email" required minLength="2" maxLength="40"
            onChange={handleChange} value={values.email || "pochta@yandex.ru"}
            className={`profile__form_input ${inputVilidities.email || inputVilidities.email === undefined ? "" : "profile__input_error"}`}
            placeholder="Email" readOnly={inputStatus} />
          <span className="profile__form_error  profile__form_error-email">{errors.email}</span>
        </form>
        <button className={`profile__btn ${ inputStatus ? "profile__btn-edit" : "profile__btn-save" }`} onClick={inputToggle}>
          { inputStatus ? "Редактировать" : "Сохранить"}
        </button>
        <button className="profile__btn profile__btn-exit">Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;