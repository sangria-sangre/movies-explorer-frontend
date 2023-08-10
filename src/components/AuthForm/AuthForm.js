import './AuthForm.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useValidator } from '../../hooks/useValidator';

function AuthForm(props) {
  const { values, handleChange, errors, inputVilidities, isValid } = useValidator();

  function handleSubmit(e) {
    e.preventDefault();
    if (props.registration) {
      props.handleSubmit(values.text, values.email, values.password);
    } else {
      props.handleSubmit(values.email, values.password);
    }
  }

  return (
    <section className="auth">
      <NavLink to="/">
        <img className="auth__img" src={logo} alt="Logo" />
      </NavLink>
      <h2 className="auth__title" >{props.title}</h2>
      <form className="auth__form" action="get" name={props.registration ? "registration" : "login"} noValidate onSubmit={handleSubmit} >
        <h3 className={props.registration ? "auth__subtitle" : "auth__none"} >Имя</h3>
        <input required={props.registration ? true : false}  type="text" name="text" id="text" minLength="2" maxLength="40"
          onChange={props.registration ? handleChange : ()=>{}} readOnly={props.registration ? false : true}
            value={values.text || ""} placeholder="Имя"
          className={props.registration ? `auth__input
          ${inputVilidities.text || inputVilidities.text === undefined ? "" : "auth__input_error"}` : "auth__none"} />
        <span className={props.registration ? "auth__error" : "auth__none"}>{errors.text}</span>

        <h3 className="auth__subtitle" >E-mail</h3>
        <input required={true}  type="email" name="email" id="email" minLength="2" maxLength="40"
          onChange={handleChange} value={values.email || ""} placeholder="Email"
          className={`auth__input ${inputVilidities.email || inputVilidities.email === undefined ? "" : "auth__input_error"}`} />
        <span className="auth__error">{errors.email}</span>

        <h3 className="auth__subtitle">Пароль</h3>
        <input required={true}  type="password" name="password" id="password" minLength="2" maxLength="40"
          onChange={handleChange} value={values.password || ""} placeholder="Пароль"
          className={`auth__input ${inputVilidities.password || inputVilidities.password === undefined ? "" : "auth__input_error"}`} />
        <span className="auth__error">{errors.password}</span>

      </form>
      <button type="submit" onClick={handleSubmit} className={`auth__btn ${props.registration ? "auth__btn_registration" : ''}
      ${isValid ? '' : "auth__btn_disabled" } `} >{props.btn}</button>
      <div className="auth__caption">
        <p className="caption__title">{props.question}</p>
        <NavLink to={props.subbtn === "Войти" ? "/signin" : "/signup"} className="caption__btn">{props.subbtn}</NavLink>
      </div>
    </section>
  );
}

export default AuthForm;