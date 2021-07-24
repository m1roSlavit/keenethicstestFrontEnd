import React from "react";
import PropTypes from "prop-types";

import './form-group.scss';

const FormGroupInput = ({handleChange, handleBlur, value, errorMessage, name, label}) => {
  return (
    <div className="form-group">
      <input name={name}
             onChange={handleChange}
             onBlur={handleBlur}
             value={value}
             type="text"
             placeholder={label}
             autoComplete="off"
             className="form-group__input"
      />
      <div className="form-group__error-msg">
        {errorMessage}
      </div>
    </div>
  );
};

FormGroupInput.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default FormGroupInput;