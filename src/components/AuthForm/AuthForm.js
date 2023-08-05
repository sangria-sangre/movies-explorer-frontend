import './AuthForm.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'

function AuthForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="auth">
      <img className="auth__img" src={logo} alt="Logo" />
      <h1 className="auth__title" >{props.title}</h1>
      <form className="auth__form" action="get" noValidate onSubmit={handleSubmit} >
        <h2 className={props.registration ? "form__title" : "form__none"} >Имя</h2>
        <input className={props.registration ? "form__input" : "form__none"} />
        <h2 className="form__title">E-mail</h2>
        <input className="form__input" />
        <h2 className="form__title">Пароль</h2>
        <input className="form__input" />
      </form>
      <button className="auth__btn">{props.btn}</button>
      <div className="auth__caption">
        <p className="caption__title">{props.question}</p>
        <NavLink to={props.subbtn === "Войти" ? "/signin" : "/signup" } className="caption__btn">{props.subbtn}</NavLink>
      </div>
    </section>
  );
}

export default AuthForm;