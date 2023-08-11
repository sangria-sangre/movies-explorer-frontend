import './InfoTooltrip.css';
import errorImg from '../../images/erorr.png';
import doneImg from '../../images/done.png';
import { MESSAGE_BADSEARCH, MESSAGE_SERVERERROR, MESSAGE_AUTHDONE, MESSAGE_AUTHERROR, MESSAGE_ERROR409, MESSAGE_SAVEDATAPROFILE } from '../../constants/constants';

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
          {props.popupTitle === "badSearch" ? MESSAGE_BADSEARCH :
            props.popupTitle === "serverError" ? MESSAGE_SERVERERROR :
              props.popupTitle === "authDone" ? MESSAGE_AUTHDONE :
                props.popupTitle === "authError" ? MESSAGE_AUTHERROR :
                  props.popupTitle === "Ошибка: 409" ? MESSAGE_ERROR409 :
                    props.popupTitle === "saveDataProfile" ? MESSAGE_SAVEDATAPROFILE :
                      ''}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltrip;