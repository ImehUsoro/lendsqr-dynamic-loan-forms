import BasicInformation from "./components/BasicInformation";
// import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="h-screen bg-gray-200 mx-auto max-w-screen-xxl py-10">
      <div className="">
        <h1 className="text-center text-4xl text-heading font-semibold mb-28">
          Loan Form Configuration Page
        </h1>

        <div className="mx-auto max-w-screen-lg">
          <BasicInformation />
        </div>
      </div>
    </div>
  );
}

export default App;
