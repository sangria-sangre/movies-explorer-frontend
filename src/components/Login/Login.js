import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <AuthForm title="Рады видеть!" btn="Войти"
    question="Ещё не зарегистрированы?" subbtn="Регистрация" />
  );
}

export default Login;