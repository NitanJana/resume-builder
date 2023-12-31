import PropTypes from 'prop-types';
const InputField = ({ label, type, name, id, autoComplete, value,onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="label-primary">
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="input-primary"
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
