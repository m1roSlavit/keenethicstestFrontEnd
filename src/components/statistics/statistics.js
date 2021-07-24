import React from "react";
import PropTypes from "prop-types";

import './statistics.scss';

const Statistics = ({bikesList}) => {
  const totalBikes = bikesList.length;
  const availableBikes = bikesList.filter(bike => bike.status === 'available').length;
  const bookedBikes = bikesList.filter(bike => bike.status === 'busy').length;
  const averageBikeCost = bikesList.reduce((sum, bike) => sum + bike.price, 0);

  return (
    <div className="statistics">
      <h2 className="statistics__title">statistics</h2>
      <ul className="statistics__list">
        <li className="statistics__list-item">Total Bikes: <strong>{totalBikes}</strong></li>
        <li className="statistics__list-item">Available Bikes: <strong>{availableBikes}</strong></li>
        <li className="statistics__list-item">Booked Bikes: <strong>{bookedBikes}</strong></li>
        <li className="statistics__list-item">Average bike cost: <strong>{averageBikeCost}</strong> UAH/hr.</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  bikesList: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }))
};

export default Statistics;