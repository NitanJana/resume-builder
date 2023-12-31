import PropTypes from 'prop-types';
import InputGroup from './InputGroup';
import ExpandIcon from '../assets/expand_icon.svg?react';
import ShrinkIcon from '../assets/shrink_icon.svg?react';

const ContentCard = ({ icon, title, isActiveCard, handleExpandClick, inputConfigurations, formData, handleChange }) => {
  return (
    <div className="content-tab flex flex-col gap-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleExpandClick}>
        <div className="flex items-center gap-8">
          {icon}
          <span className="text-xl font-bold text-left">{title}</span>
        </div>
        {isActiveCard ? <ShrinkIcon /> : <ExpandIcon />}
      </div>

      {isActiveCard && (
        <form className="flex flex-col gap-3">
          {inputConfigurations.map(({ label, type, name, id, autoComplete }) => (
            <InputGroup
              key={name}
              label={label}
              type={type}
              name={name}
              id={id}
              autoComplete={autoComplete}
              value={formData[name]}
              onChange={handleChange}
            />
          ))}
        </form>
      )}
    </div>
  );
};

ContentCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  isActiveCard: PropTypes.bool.isRequired,
  handleExpandClick: PropTypes.func.isRequired,
  inputConfigurations: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      autoComplete: PropTypes.string.isRequired,
    }),
  ).isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ContentCard;
