import PropTypes from 'prop-types';
import ExpandIcon from '../assets/expand_icon.svg?react';
import ShrinkIcon from '../assets/shrink_icon.svg?react';

const ContentTab = ({ icon, title, isActive, onClick }) => {
  return isActive ? (
    <div className="content-tab flex flex-col gap-4">
      <div className=" flex justify-between cursor-pointer" onClick={onClick}>
        <div className="flex items-center gap-8">
          {icon}
          <span className="text-xl font-bold text-left">{title}</span>
        </div>
        <ShrinkIcon />
      </div>
      <div className="">
        <p>details</p>
        <p>details</p>
      </div>
    </div>
  ) : (
    <div className="content-tab flex justify-between cursor-pointer" onClick={onClick}>
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
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContentTab;
