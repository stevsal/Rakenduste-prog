import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css"; //https://codepen.io/melnik909/pen/YjGZqQ


const Checkbox = ({name, onChange, checked}) => (
  <div className="page__toggle">
       <label className="toggle">
        <input
          className="toggle__input"
          name= {name}
          type="checkbox"
          checked={checked}
          onChange={onChange} />
          <span className="toggle__label">
            <span className="toggle__text">{name}</span>
          </span>
      </label>

  </div>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
