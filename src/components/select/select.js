import React, {useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import './select.scss';
import arrowDown from './arrow-down.svg'

const Select = ({options, onOptionClick, activeValue}) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  const currentLabel = options.find(option => option.value === activeValue)?.label;

  return (
    <div className="select">
      <div className="select__control">
        <div className="select__value-container">{currentLabel}</div>
        <div className="select__indicators"
             onClick={() => setVisibleDropdown((value) => !value)}>
          <img src={arrowDown} alt="Open"/>
        </div>
      </div>
      <div className={classNames('select__menu', {'active': visibleDropdown})}>
        <div className="select__menu-list" onClick={() => setVisibleDropdown(false)}>
          {
            options.map(({value, label}) => {
              if (value === activeValue) return null;
              return (
                <div key={value} className="select__option" onClick={() => onOptionClick(value)}>
                  {label}
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    label: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  })).isRequired,
  onOptionClick: PropTypes.func.isRequired,
  activeValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Select;