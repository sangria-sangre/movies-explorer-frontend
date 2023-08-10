import './InfoTooltrip.css';
import errorImg from '../../images/erorr.png';
import doneImg from '../../images/done.png'

function InfoTooltrip(props) {

  function isClose() {
    props.toggle();
  }

  return (
    <section className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container" >
        <button className="popup__close-btn" type="button" onClick={isClose}></button>
        <img className="popup__image" src={props.popupTitle === "authDone" || props.popupTitle === "saveDataProfile" ? doneImg : errorImg} alt="cros" />
        <h2 className="popup__title">
          {props.popupTitle === "badSearch" ? "Нужно ввести ключевое слово." :
            props.popupTitle === "serverError" ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз." :
            props.popupTitle === "authDone" ? "Вы успешно зарегистрировались!" :
            props.popupTitle === "authError" ? `Что-то пошло не так! Попробуйте ещё раз.` :
            props.popupTitle === "Ошибка: 409" ? `Пользователь с такими данными уже сущетвует.` :
            props.popupTitle === "saveDataProfile" ? `Данные изменены успешно.` :
            ''}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltrip;