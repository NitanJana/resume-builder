import PropTypes from 'prop-types';
import ExpandIcon from '../assets/expand_icon.svg?react';

const ContentTab = ({ icon, title }) => {
  return (
    <div className="content-tab flex justify-between cursor-pointer">
      <div className="flex items-center gap-8">
        {icon}
        <span className="text-xl font-bold text-left">{title}</span>
      </div>
      <ExpandIcon />
    </div>
  );
};

ContentTab.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentTab;
