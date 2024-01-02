import PropTypes from 'prop-types';
import InputGroup from './InputGroup';
import ExpandIcon from '../assets/expand_icon.svg?react';
import ShrinkIcon from '../assets/shrink_icon.svg?react';
import { useState, useMemo } from 'react';

const ContentCard = ({
  icon,
  title,
  isActiveCard,
  handleExpandClick,
  inputConfigurations,
  formData,
  handleChange,
  onSaveData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [savedData, setSavedData] = useState([]);

  const renderInputGroups = (inputConfigurations, formData, handleChange) => {
    return inputConfigurations.map(({ label, type, name, id, placeholder, autoComplete }) => (
      <InputGroup
        key={name}
        label={label}
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        value={formData[name]}
        placeholder={placeholder}
        onChange={handleChange}
      />
    ));
  };

  const memoizedRenderInputGroups = useMemo(
    () => renderInputGroups(inputConfigurations, formData, handleChange),
    [inputConfigurations, formData, handleChange],
  );
  const handleSave = (event) => {
    event.preventDefault();
    const newData = { type: title, data: formData };
    setSavedData([...savedData, newData]);
    onSaveData(newData);
    setIsExpanded(false);
  };

  const renderForm = () => {
    if (title === 'Personal') {
      return <form className="flex flex-col gap-3">{memoizedRenderInputGroups}</form>;
    }

    if (title === 'Education' || title === 'Experience') {
      return isExpanded ? (
        <form className="flex flex-col gap-3" onSubmit={handleSave}>
          {memoizedRenderInputGroups}
          <button className="bg-slate-400" onClick={() => setIsExpanded(false)}>
            Cancel
          </button>
          <button className="bg-slate-400" type="submit">
            Save
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center gap-4">
          {title === 'Education'
            ? savedData
                .filter((data) => data.type === 'Education')
                .map((data, index) => (
                  <div key={`education-${index}`} className="">
                    <p>{data.data.school}</p>
                  </div>
                ))
            : title === 'Experience'
              ? savedData
                  .filter((data) => data.type === 'Experience')
                  .map((data, index) => (
                    <div key={`experience-${index}`} className="">
                      <p>{data.data.company}</p>
                    </div>
                  ))
              : null}
          <button className="add-button" onClick={() => setIsExpanded(true)}>
            {title}
          </button>
        </div>
      );
    }
  };

  return (
    <div className="content-tab flex flex-col gap-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleExpandClick}>
        <div className="flex items-center gap-8">
          {icon}
          <h2 className="text-xl font-bold text-left text-blue-900">
            {title} {title === 'Personal' && <span className="text-xs font-thin text-slate-600">mandatory</span>}
          </h2>
        </div>
        {isActiveCard ? <ShrinkIcon /> : <ExpandIcon />}
      </div>
      {isActiveCard && renderForm()}
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
  onSaveData: PropTypes.func.isRequired,
};

export default ContentCard;
