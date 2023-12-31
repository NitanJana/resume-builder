import PropTypes from 'prop-types';
const Contacts = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p>{title}</p>
    </div>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Contacts;
