import './FilterCheckbox.css';

import React from 'react';

function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <h3 className="filter-checkbox__title">Короткометражки</h3>
      <div className="checkbox" onClick={props.toggle}>
        <div className={`checkbox__cirqle ${props.status ?
          (props.status === 'start') ? "checkbox__cirqle_position-left" :
            "animation-on checkbox__cirqle_position-right" :
          "animation-off checkbox__cirqle_position-left"} `}></div>
      </div>
    </div>
  );
}

export default FilterCheckbox;