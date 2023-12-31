import PropTypes from 'prop-types';
const InfoDisplay = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p>{title}</p>
    </div>
  );
};

InfoDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default InfoDisplay;
