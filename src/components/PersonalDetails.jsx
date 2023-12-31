import PropTypes from 'prop-types';
import InputField from './InputField';
import ExpandIcon from '../assets/expand_icon.svg?react';
import ShrinkIcon from '../assets/shrink_icon.svg?react';
import PersonIcon from '../assets/person_icon.svg?react';
const PersonalDetails = ({ formData, handleChange, isActive, onClick }) => {
  return isActive ? (
    <div className="content-tab ">
      <div className="mb-5 flex justify-between items-center cursor-pointer" onClick={onClick}>
        <PersonIcon />
        <h2 className="text-2xl font-bold ">Personal Details</h2>
        <ShrinkIcon />
      </div>
      <div className="flex flex-col gap-3">
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          id="fullName"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          autoComplete="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <InputField
          label="Address"
          type="text"
          name="address"
          id="address"
          autoComplete="street-address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
    </div>
  ) : (
    <div className="content-tab flex justify-between cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-8">
        <PersonIcon />
        <span className="text-xl font-bold text-left">Personal Details</span>
      </div>
      <ExpandIcon />
    </div>
  );
};

PersonalDetails.propTypes = {
  formData: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PersonalDetails;
