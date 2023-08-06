import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__part">
          <h3 className="portfolio__subtitle">Статичный сайт</h3>
          <a className="portfolio__link" href="/" alt="arrow">↗</a>
        </li>
        <li className="portfolio__part">
          <h3 className="portfolio__subtitle">Адаптивный сайт</h3>
          <a className="portfolio__link" href="/" alt="arrow">↗</a>
        </li>
        <li className="portfolio__part">
          <h3 className="portfolio__subtitle">Одностраничное приложение</h3>
          <a className="portfolio__link" href="/" alt="arrow">↗</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;