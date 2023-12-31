import EduIcon from '../assets/edu_icon.svg?react';
import ExpIcon from '../assets/exp_icon.svg?react';

import PhoneIcon from '../assets/phone_icon.svg?react';
import EmailIcon from '../assets/mail_icon.svg?react';
import AddressIcon from '../assets/address_icon.svg?react';

import InputField from './InputField';
import ContentTab from './ContentTab';
import Contacts from './Contacts';

import '../styles/App.css';

import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    const phoneRegex = /^[0-9\s]*$/;
    if (name === 'phoneNumber' && !phoneRegex.test(value)) {
      return; // Do not update state for invalid phone numbers
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-screen bg-gray-100 grid grid-cols-[1fr_5fr_8fr] font-poppins">
      <div className=""></div>

      <section className="p-8 flex flex-col gap-8 ">
        <div className="content-tab ">
          <h2 className="text-2xl font-bold mb-5">Personal Details</h2>
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

        <ContentTab icon={<EduIcon />} title="Education" />
        <ContentTab icon={<ExpIcon />} title="Experience" />
      </section>

      {Object.values(formData).some((value) => !!value) ? (
        <section className="m-8">
          <div className="bg-blue-950 text-white text-center p-8">
            <p className="text-4xl font-bold mb-4">{formData.fullName}</p>
            <div className="w-full flex justify-between text-sm font-thin">
              {formData.email && <Contacts icon={<EmailIcon className="fill-white"/>} title={formData.email} />}
              {formData.phoneNumber && <Contacts icon={<PhoneIcon className="fill-white"/>} title={formData.phoneNumber} />}
              {formData.address && <Contacts icon={<AddressIcon className="fill-white"/>} title={formData.address} />}
            </div>
          </div>
        </section>
      ) : (
        <section className="w-0" />
      )}
    </div>
  );
}

export default App;
