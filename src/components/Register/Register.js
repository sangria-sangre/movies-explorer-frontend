import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <AuthForm title="Добро пожаловать!" registration={true} btn="Зарегистрироваться"
    question="Уже зарегистрированы?" subbtn="Войти" />
  );
}

export default Register;