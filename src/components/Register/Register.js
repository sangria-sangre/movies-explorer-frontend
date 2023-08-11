import AuthForm from '../AuthForm/AuthForm';

function Register(props) {

  function handleSubmit(name, email, password) {
    props.handleSubmit(name, email, password);
  }

  return (
    <AuthForm title="Добро пожаловать!" registration={true} btn="Зарегистрироваться"
      question="Уже зарегистрированы?" subbtn="Войти" handleSubmit={handleSubmit} />
  );
}

export default Register;