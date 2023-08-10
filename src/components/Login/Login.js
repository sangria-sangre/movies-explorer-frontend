import AuthForm from '../AuthForm/AuthForm';

function Login(props) {

const handleSubmit = (email, password) => {
    props.handleSubmit(email, password);
}

  return (
    <AuthForm title="Рады видеть!" btn="Войти"
    question="Ещё не зарегистрированы?" subbtn="Регистрация"
    handleSubmit={handleSubmit} />
  );
}

export default Login;