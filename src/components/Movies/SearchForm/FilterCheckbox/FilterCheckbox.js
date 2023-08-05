import './FilterCheckbox.css';

import React from 'react';

function FilterCheckbox() {

  const [toggleStatus, setToggleStatus] = React.useState('start');

  function toggle() {
    if (toggleStatus === 'start') {
      setToggleStatus(true);
    } else if (toggleStatus) {
      setToggleStatus(false);
    } else {
      setToggleStatus(true);
    }
  }

  return (
    <div className="filter-checkbox">
      <h2 className="filter-checkbox__title">Короткометражки</h2>
      <div className="checkbox"  onClick={toggle}>
        <div className={`checkbox__cirqle ${toggleStatus ?
          (toggleStatus === 'start') ? "checkbox__cirqle_position-left" :
            "animation-on checkbox__cirqle_position-right" :
          "animation-off checkbox__cirqle_position-left"} `}></div>
      </div>
    </div>
  );
}

export default FilterCheckbox;