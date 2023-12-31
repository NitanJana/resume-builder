import { useState } from 'react';

import PersonIcon from '../assets/person_icon.svg?react';
import EduIcon from '../assets/edu_icon.svg?react';
import ExpIcon from '../assets/exp_icon.svg?react';

import PhoneIcon from '../assets/phone_icon.svg?react';
import EmailIcon from '../assets/mail_icon.svg?react';
import AddressIcon from '../assets/address_icon.svg?react';

import ContentCard from './ContentCard';
import InfoDisplay from './InfoDisplay';

import inputConfigurationsMap from './inputConfiguration';

import '../styles/App.css';

function App() {
  const [activeCard, setActiveCard] = useState('personal');

  const [personalData, setPersonalData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [educationData, setEducationData] = useState({
    school: '',
    degree: '',
    startStudy: '',
    endStudy: '',
    locationStudy: '',
  });

  const [experienceData, setExperienceData] = useState({
    position: '',
    company: '',
    startWork: '',
    endWork: '',
    locationWork: '',
    descriptionWork: '',
  });
  const [savedData, setSavedData] = useState([]);

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

  const handleDeleteData = (type, index) => {
    const updatedData = savedData.filter((data) => !(data.type === type && savedData.indexOf(data) === index));
    setSavedData(updatedData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 grid grid-cols-[1fr_5fr_8fr] font-poppins">
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
          savedData={savedData}
          onSaveData={(newData) => setSavedData([...savedData, newData])}
          onDeleteData={(type, index) => handleDeleteData(type, index)}
        />

        <ContentCard
          icon={<EduIcon />}
          title="Education"
          isActiveCard={activeCard === 'education'}
          handleExpandClick={() => setActiveCard('education')}
          inputConfigurations={inputConfigurationsMap.education}
          formData={educationData}
          handleChange={(event) => handleChange(event, setEducationData)}
          savedData={savedData}
          onSaveData={(newData) => setSavedData([...savedData, newData])}
          onDeleteData={(type, index) => handleDeleteData(type, index)}
        />

        <ContentCard
          icon={<ExpIcon />}
          title="Experience"
          isActiveCard={activeCard === 'experience'}
          handleExpandClick={() => setActiveCard('experience')}
          inputConfigurations={inputConfigurationsMap.experience}
          formData={experienceData}
          handleChange={(event) => handleChange(event, setExperienceData)}
          savedData={savedData}
          onSaveData={(newData) => setSavedData([...savedData, newData])}
          onDeleteData={(type, index) => handleDeleteData(type, index)}
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

          <div className="p-10">
            <div className="">
              <h3 className="sub-header">Education</h3>
              <div className="flex flex-col gap-2">
                {savedData
                  .filter((data) => data.type === 'Education')
                  .map((data, index) => (
                    <div key={`education-${index}`} className="flex gap-8 p-4">
                      <div className="">
                        <div className="flex flex-row">
                          <p>{data.data.startStudy}</p>
                          <span className="mx-2">-</span>
                          <p>{data.data.endStudy}</p>
                        </div>

                        <p>{data.data.locationStudy}</p>
                      </div>
                      <div className="">
                        <p className="font-bold">{data.data.school}</p>
                        <p>{data.data.degree}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="">
              <h3 className="sub-header">Experience</h3>
              <div className="flex flex-col gap-2">
                {savedData
                  .filter((data) => data.type === 'Experience')
                  .map((data, index) => (
                    <div key={`experience-${index}`} className="flex gap-8 p-4">
                      <div className="">
                        <div className="flex flex-row">
                          <p>{data.data.startWork}</p>
                          <span className="mx-2">-</span>
                          <p>{data.data.endWork}</p>
                        </div>

                        <p>{data.data.locationWork}</p>
                      </div>
                      <div className="">
                        <p className="font-bold">{data.data.company}</p>
                        <p>{data.data.position}</p>
                        <p>{data.data.descriptionWork}</p>
                      </div>
                    </div>
                  ))}
              </div>
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
