import React from "react";

import './form-group.scss';
import PropTypes from "prop-types";

const FormGroupTextArea = ({handleChange, handleBlur, value, errorMessage, name, label}) => {
  return (
    <div className="form-group">
      <textarea name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                placeholder={label}
                className="form-group__textarea"
      >
      </textarea>
      <div className="form-group__error-msg">
        {errorMessage}
      </div>
    </div>
  );
};

FormGroupTextArea.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default FormGroupTextArea;