import React from "react";
import PropTypes from 'prop-types';

import './bike-card.scss';
import del from './del.svg';
import BikeStatusSelect from "../bike-status-select";

const BikeCard = ({name, type, color, id, price, status, onChangeStatusBike, onDeleteBike}) => {
  return (
    <div className={`bike-card bike-card_${status}`}>
      <div className="bike-card__left-col">
        <div className="bike-card__title">
          <strong>{name}</strong> - {type} ({color})
        </div>
        <div className="bike-card__id">
          ID: {id}
        </div>
        <div className="bike-card__status">
          <div className="bike-card__status-label">
            status:
          </div>
          <BikeStatusSelect
            activeValue={status}
            onOptionClick={(value) => onChangeStatusBike(id, value)}
          />
        </div>
      </div>
      <div className="bike-card__right-col">
        <div className="bike-card__delete" onClick={() => onDeleteBike(id)}>
          <img src={del} alt="Delete"/>
        </div>
        <div className="bike-card__price">{price} UAH/hr</div>
      </div>
    </div>
  );
};

BikeCard.defaultProps = {
  status: 'available'
};

BikeCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string,
  onChangeStatusBike: PropTypes.func.isRequired,
  onDeleteBike: PropTypes.func.isRequired,
};

export default BikeCard;