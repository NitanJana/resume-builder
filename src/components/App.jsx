import EduIcon from '../assets/edu_icon.svg?react';
import ExpIcon from '../assets/exp_icon.svg?react';

import PhoneIcon from '../assets/phone_icon.svg?react';
import EmailIcon from '../assets/mail_icon.svg?react';
import AddressIcon from '../assets/address_icon.svg?react';

import ContentTab from './ContentTab';
import Contacts from './Contacts';
import PersonalDetails from './PersonalDetails';

import '../styles/App.css';

import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('personal');

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
        <PersonalDetails
          formData={formData}
          handleChange={handleChange}
          isActive={activeTab === 'personal'}
          onClick={() => setActiveTab('personal')}
        />

        <ContentTab
          icon={<EduIcon />}
          title="Education"
          isActive={activeTab === 'education'}
          onClick={() => setActiveTab('education')}
        />
        <ContentTab
          icon={<ExpIcon />}
          title="Experience"
          isActive={activeTab === 'experience'}
          onClick={() => setActiveTab('experience')}
        />
      </section>

      {Object.values(formData).some((value) => !!value) ? (
        <section className="m-8">
          <div className="bg-blue-950 text-white text-center p-8">
            <p className="text-4xl font-bold mb-4">{formData.fullName}</p>
            <div className="w-full flex justify-center gap-6 text-sm font-thin">
              {formData.email && <Contacts icon={<EmailIcon className="fill-white" />} title={formData.email} />}
              {formData.phoneNumber && (
                <Contacts icon={<PhoneIcon className="fill-white" />} title={formData.phoneNumber} />
              )}
              {formData.address && <Contacts icon={<AddressIcon className="fill-white" />} title={formData.address} />}
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
