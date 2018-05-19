import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  id,
  value,
  handleChange,
  handleSubmit,
}) => (
  <form id="writing" onSubmit={handleSubmit(value, id)}>
    <input
      value={value}
      id={id}
      onChange={handleChange}
      type="text"
      placeholder="Votre Message"
    />
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Form;
