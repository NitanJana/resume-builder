import { useState } from 'react';

import PersonIcon from '../assets/person_icon.svg?react';
import EduIcon from '../assets/edu_icon.svg?react';
import ExpIcon from '../assets/exp_icon.svg?react';

import PhoneIcon from '../assets/phone_icon.svg?react';
import EmailIcon from '../assets/mail_icon.svg?react';
import AddressIcon from '../assets/address_icon.svg?react';

import ContentCard from './ContentCard';
import InfoDisplay from './InfoDisplay';

import '../styles/App.css';

function App() {
  const [activeCard, setActiveCard] = useState('personal');

  // Separate state for each tab's data
  const [personalData, setPersonalData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [educationData, setEducationData] = useState({
    degree: '',
    school: '',
    yearGraduated: '',
  });

  const [experienceData, setExperienceData] = useState({
    position: '',
    company: '',
    yearsWorked: '',
  });

  const handleChange = (event, dataSetter) => {
    const { name, value } = event.target;

    const phoneRegex = /^[0-9\s]*$/;
    if (name === 'phoneNumber' && !phoneRegex.test(value)) {
      return;
    }

    dataSetter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const inputConfigurationsMap = {
    personal: [
      { label: 'Full Name', type: 'text', name: 'fullName', id: 'fullName', autoComplete: 'name' },
      { label: 'Email', type: 'email', name: 'email', id: 'email', autoComplete: 'email' },
      { label: 'Phone Number', type: 'tel', name: 'phoneNumber', id: 'phoneNumber', autoComplete: 'tel' },
      { label: 'Address', type: 'text', name: 'address', id: 'address', autoComplete: 'street-address' },
    ],
    education: [
      { label: 'Degree', type: 'text', name: 'degree', id: 'degree', autoComplete: 'education-level' },
      { label: 'School', type: 'text', name: 'school', id: 'school', autoComplete: 'organization' },
      { label: 'Year Graduated', type: 'text', name: 'yearGraduated', id: 'yearGraduated', autoComplete: 'off' },
    ],
    experience: [
      { label: 'Position', type: 'text', name: 'position', id: 'position', autoComplete: 'job-title' },
      { label: 'Company', type: 'text', name: 'company', id: 'company', autoComplete: 'organization' },
      { label: 'Years Worked', type: 'text', name: 'yearsWorked', id: 'yearsWorked', autoComplete: 'off' },
    ],
  };

  return (
    <div className="w-full h-screen bg-gray-100 grid grid-cols-[1fr_5fr_8fr] font-poppins">
      <div className=""></div>

      <section className="p-8 flex flex-col gap-8 ">
        <ContentCard
          icon={<PersonIcon />}
          title="Personal"
          isActiveCard={activeCard === 'personal'}
          handleExpandClick={() => setActiveCard('personal')}
          inputConfigurations={inputConfigurationsMap.personal}
          formData={personalData}
          handleChange={(event) => handleChange(event, setPersonalData)}
        />

        <ContentCard
          icon={<EduIcon />}
          title="Education"
          isActiveCard={activeCard === 'education'}
          handleExpandClick={() => setActiveCard('education')}
          inputConfigurations={inputConfigurationsMap.education}
          formData={educationData}
          handleChange={(event) => handleChange(event, setEducationData)}
        />

        <ContentCard
          icon={<ExpIcon />}
          title="Experience"
          isActiveCard={activeCard === 'experience'}
          handleExpandClick={() => setActiveCard('experience')}
          inputConfigurations={inputConfigurationsMap.experience}
          formData={experienceData}
          handleChange={(event) => handleChange(event, setExperienceData)}
        />
      </section>

      {Object.values(personalData).some((value) => !!value) ? (
        <section className="m-8">
          <div className="bg-blue-950 text-white text-center p-8">
            <p className="text-4xl font-bold mb-4">{personalData.fullName}</p>
            <div className="w-full flex justify-center gap-6 text-sm font-thin">
              {personalData.email && (
                <InfoDisplay icon={<EmailIcon className="fill-white" />} title={personalData.email} />
              )}
              {personalData.phoneNumber && (
                <InfoDisplay icon={<PhoneIcon className="fill-white" />} title={personalData.phoneNumber} />
              )}
              {personalData.address && (
                <InfoDisplay icon={<AddressIcon className="fill-white" />} title={personalData.address} />
              )}
            </div>
          </div>
          <p>{educationData.degree}</p>
          <p>{educationData.school}</p>
          <p>{educationData.yearGraduated}</p>
          <p>{experienceData.position}</p>
          <p>{experienceData.company}</p>
          <p>{experienceData.yearsWorked}</p>
        </section>
      ) : (
        <section className="w-0" />
      )}
    </div>
  );
}

export default App;
