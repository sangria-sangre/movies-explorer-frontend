import './Profile.css'
import Header from '../Header/Header'
import React from 'react';

function Profile() {

  const [inputStatus, setInputStatus] = React.useState(true);

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
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" action="get" noValidate onSubmit={handleSubmit} >
          <h2 className="form__title">Имя</h2>
          <input className="form__input" type="text" name="name" noValidate
            placeholder="Имя" required value="Виталий" readOnly={inputStatus} />
          <p className="form__line"></p>
          <h2 className="form__title">E-mail</h2>
          <input className="form__input" type="email" name="email" noValidate
            placeholder="Email" required value="pochta@yandex.ru" readOnly={inputStatus} />
        </form>
        <button className="profile__btn profile__btn-edit" onClick={inputToggle}>Редактировать</button>
        <button className="profile__btn profile__btn-exit">Выйти из аккаунта</button>
      </section>
    </>
  );
}

export default Profile;