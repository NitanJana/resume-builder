import PropTypes from 'prop-types';
const InputGroup = ({ label, type, name, id, autoComplete, value, onChange }) => {
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

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
