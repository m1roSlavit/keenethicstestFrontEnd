import React from "react";
import PropTypes from "prop-types";

import BikeCard from "../bike-card";
import './bike-list.scss';

const BikeList = ({bikesList, onChangeStatusBike, onDeleteBike}) => {
  return (
    <div className="bike-list">
      {
        bikesList.length === 0 ? 'No one bike' : bikesList.map(bike => {
          return (
            <BikeCard
              key={bike.id}
              name={bike.name}
              type={bike.type}
              color={bike.color}
              id={bike.id}
              price={bike.price}
              status={bike.status}
              onDeleteBike={onDeleteBike}
              onChangeStatusBike={onChangeStatusBike}
            />
          );
        })
      }
    </div>
  );
};


BikeList.defaultProps = {
  bikesList: [],
};

BikeList.propTypes = {
  bikesList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
  onChangeStatusBike: PropTypes.func.isRequired,
  onDeleteBike: PropTypes.func.isRequired,
};

export default BikeList;