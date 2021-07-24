import React from "react";
import PropTypes from "prop-types";

import './button.scss';

const Button = ({ onClick, className, type, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`btn ${className}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: 'btn-primary',
  type: 'text',
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;