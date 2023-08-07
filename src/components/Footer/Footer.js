import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__box">
        <a className="footer__subtitle" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
        <a className="footer__subtitle" href="https://github.com/sangria-sangre/" target="_blank" rel="noopener noreferrer">Github</a>
        <p className="footer__caption">&#169;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;