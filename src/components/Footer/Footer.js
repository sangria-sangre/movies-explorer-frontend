import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
      <div className="footer__box">
        <h2 className="footer__subtitle">Яндекс.Практикум</h2>
        <h2 className="footer__subtitle">Github</h2>
        <p className="footer__caption">&#169;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;