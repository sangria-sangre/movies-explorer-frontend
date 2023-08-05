import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h1 className="about-project__title">О проекте</h1>
      <ul className="about-project__list">
        <li>
          <h2 className="about-project__subtitle">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__text">Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h2 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <table className="about-project__table">
        <tr>
          <td className="about-project__table_title about-project__table_title-black">1 неделя</td>
          <td className="about-project__table_title about-project__table_title-white">4 недели</td>
        </tr>
        <tr>
          <td className="about-project__table_subtitle">Back-end</td>
          <td className="about-project__table_subtitle">Front-end</td>
        </tr>
      </table>
    </section>
  );
}

export default AboutProject;