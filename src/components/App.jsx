import '../styles/App.css';

function App() {
  return (
    <div className="w-full h-screen bg-gray-100 grid grid-cols-[1fr_4fr_5fr]">
      <div className=""></div>

      <section className="p-8 flex flex-col gap-8">
        <div className="content-tab ">
          <h2 className="text-2xl font-bold mb-5">Personal Details</h2>
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="fullName" className="label-primary">
                Full Name
              </label>
              <input autoComplete="name" type="text" name="fullName" id="fullName" className="input-primary" />
            </div>

            <div>
              <label htmlFor="email" className="label-primary">
                Email
              </label>
              <input autoComplete="email" type="email" name="email" id="email" className="input-primary" />
            </div>

            <div>
              <label htmlFor="phNumber" className="label-primary">
                Phone Number
              </label>
              <input autoComplete="tel" type="tel" name="phNumber" id="phNumber" className="input-primary" />
            </div>

            <div>
              <label htmlFor="address" className="label-primary">
                Address
              </label>
              <input autoComplete="street-address" type="text" name="address" id="address" className="input-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className=""></section>
    </div>
  );
}

export default App;
