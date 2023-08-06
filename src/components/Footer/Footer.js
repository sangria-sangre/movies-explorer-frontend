import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__box">
        <h3 className="footer__subtitle">Яндекс.Практикум</h3>
        <h3 className="footer__subtitle">Github</h3>
        <p className="footer__caption">&#169;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;