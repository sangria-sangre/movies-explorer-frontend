import './MoviesCardList.css';
import MoviesData from './MoviesData';
import MoviesCard from '../MoviesCard/MoviesCard'
import React from 'react';

function MoviesCardList(props) {

  const [arr, setArr] = React.useState(MoviesData);
  const [defaultQuantity, setDefaultQuantity] = React.useState('');
  const [baseQuantity, setBaseQuantity] = React.useState('');
  const widthScreen = window.matchMedia('(min-width: 320px) and (max-width: 1280px)');
  const width320 = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
  const width768 = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');
  const width1280 = window.matchMedia('(min-width: 1280px)');

  React.useEffect(() => {
    checkWindowWidth();
    if (props.statusMovies === "saved") {
      setArr(MoviesData.filter((card) => card.like === true));
    }
  }, []);

  widthScreen.addEventListener('change', function () {
    checkWindowWidth();
  });

  function checkWindowWidth() {
    if (width320.matches) {
      setBaseQuantity(5);
      setDefaultQuantity(5);
    } else if (width768.matches) {
      setBaseQuantity(8);
      setDefaultQuantity(8);
    } else if (width1280.matches) {
      setBaseQuantity(12);
      setDefaultQuantity(12);
    }
  }

  function showMoreCard() {
    if (defaultQuantity === 5)
      setBaseQuantity(baseQuantity + 5);
    else if (defaultQuantity === 8) {
      setBaseQuantity(baseQuantity + 8);
    } else if (defaultQuantity === 12) {
      setBaseQuantity(baseQuantity + 12);
    }
  }

  return (
      <section className="card-list">
        <div className="cards">
          {props.statusMovies === "saved" ?
            arr.filter((card) => card.like === true).slice(0, baseQuantity).map((card, index) => (
              <MoviesCard title={card.title} img={card.img} duration={card.time}
                statusMovies="saved" key={index} />
            )) :
            arr.slice(0, baseQuantity).map((card, index) => (
              <MoviesCard title={card.title} img={card.img} duration={card.time} like={card.like} key={index} />
            ))
          }
        </div>
        <button className={baseQuantity >= arr.length ? "card-list__disabled" : "card-list__btn"} onClick={showMoreCard} >Ещё</button>
      </section>
  );
}

export default MoviesCardList;