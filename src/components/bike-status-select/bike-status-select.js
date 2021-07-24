import React from "react";
import PropTypes from 'prop-types'

import Select from "../select";

const BikeStatusSelect = ({activeValue, onOptionClick}) => {
  const bikeStatusOptions = [
    {
      value: 'available',
      label: 'Available',
    },
    {
      value: 'busy',
      label: 'Busy',
    },
    {
      value: 'unavailable',
      label: 'Unavailable',
    },
  ]

  return (
    <Select
      options={bikeStatusOptions}
      activeValue={activeValue}
      onOptionClick={onOptionClick}
    />
  );
};

BikeStatusSelect.defaultProps = {
  activeValue: 'available'
};

BikeStatusSelect.propTypes = {
  activeValue: PropTypes.string,
  onOptionClick: PropTypes.func.isRequired,
};

export default BikeStatusSelect;