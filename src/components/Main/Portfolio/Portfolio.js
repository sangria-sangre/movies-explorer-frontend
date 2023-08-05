import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <ul className="portfolio__list">
        <li className="portfolio__part">
          <h2 className="portfolio__subtitle">Статичный сайт</h2>
          <a className="portfolio__link" href="/" alt="arrow">↗</a>
        </li>
        <li className="portfolio__part">
          <h2 className="portfolio__subtitle">Адаптивный сайт</h2>
          <a className="portfolio__link" href="/" alt="arrow">↗</a>
        </li>
        <li className="portfolio__part">
          <h2 className="portfolio__subtitle">Одностраничное приложение</h2>
          <a className="portfolio__link" href="/" alt="arrow">↗</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;