import './AboutMe.css';
import photoProfile from '../../../images/photo-profile.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__box">
        <img className="about-me__image" src={photoProfile} alt="photoProfile" />
        <h3 className="about-me__subtitle">Александра</h3>
        <h4 className="about-me__caption">Фронтенд-разработчик, 23 года</h4>
        <p className="about-me__text">Я родилась и живу в Санкт-Петербурге, закончила факультет
          факультет информационных систем и технологий. Я люблю
          учится новому и читать различную литературу, а ещё увлекаюсь танцами.
          Начала кодить еще в университете. С 2023 года работаю в компании «Selectel».
          Прошла курс по веб-разработке и на данный момент делаю pet-проекты
          для поплнения порфолио и закреплениия знаний.</p>
        <a className="about-me__link" href="https://github.com/sangria-sangre/" target="_blank" rel="noopener noreferrer" >Github</a>
      </div>
    </section>
  );
}

export default AboutMe;