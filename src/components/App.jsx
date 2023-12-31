import EduIcon from '../assets/edu_icon.svg?react';
import ExpIcon from '../assets/exp_icon.svg?react';
import InputField from './InputField';
import ContentTab from './ContentTab';

import '../styles/App.css';

function App() {
  return (
    <div className="w-full h-screen bg-gray-100 grid grid-cols-[1fr_4fr_5fr] font-poppins">
      <div className=""></div>

      <section className="p-8 flex flex-col gap-8">
        <div className="content-tab ">
          <h2 className="text-2xl font-bold mb-5">Personal Details</h2>
          <div className="flex flex-col gap-3">
            <InputField label="Full Name" type="text" name="fullName" id="fullName" autoComplete="name" />

            <InputField label="Email" type="email" name="email" id="email" autoComplete="email" />

            <InputField label="Phone Number" type="tel" name="phNumber" id="phNumber" autoComplete="tel" />

            <InputField label="Address" type="text" name="address" id="address" autoComplete="street-address" />
          </div>
        </div>

        <ContentTab icon={<EduIcon />} title="Education" />
        <ContentTab icon={<ExpIcon />} title="Experience" />
      </section>

      <section className=""></section>
    </div>
  );
}

export default App;
