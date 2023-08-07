import './AuthForm.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useValidator } from '../../hooks/useValidator';

function AuthForm(props) {
  const { values, handleChange, errors, inputVilidities } = useValidator();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="auth">
      <NavLink to="/">
        <img className="auth__img" src={logo} alt="Logo" />
      </NavLink>
      <h2 className="auth__title" >{props.title}</h2>
      <form className="auth__form" action="#" name={props.registration ? "registration" : "login"} noValidate onSubmit={handleSubmit} >
        <h3 className={props.registration ? "form__title" : "form__none"} >Имя</h3>
        <input required={true}  type="text" name="text" id="text" minLength="2" maxLength="40"
          onChange={handleChange} value={values.text || ""} placeholder="Имя"
          className={props.registration ? `form__input
          ${inputVilidities.text || inputVilidities.text === undefined ? "" : "form__input_error"}` : "form__none"} />
        <span className={props.registration ? "form__error" : "form__none"}>{errors.text}</span>

        <h3 className="form__title" >E-mail</h3>
        <input required={true}  type="email" name="email" id="email" minLength="2" maxLength="40"
          onChange={handleChange} value={values.email || ""} placeholder="Email"
          className={`form__input ${inputVilidities.email || inputVilidities.email === undefined ? "" : "form__input_error"}`} />
        <span className="form__error">{errors.email}</span>

        <h3 className="form__title">Пароль</h3>
        <input required={true}  type="password" name="password" id="password" minLength="2" maxLength="40"
          onChange={handleChange} value={values.password || ""} placeholder="Пароль"
          className={`form__input ${inputVilidities.password || inputVilidities.password === undefined ? "" : "form__input_error"}`} />
        <span className="form__error">{errors.password}</span>

      </form>
      <button className={`auth__btn ${props.registration ? "auth__btn_registration" : ''}`} >
        {props.btn}</button>
      <div className="auth__caption">
        <p className="caption__title">{props.question}</p>
        <NavLink to={props.subbtn === "Войти" ? "/signin" : "/signup"} className="caption__btn">{props.subbtn}</NavLink>
      </div>
    </section>
  );
}

export default AuthForm;