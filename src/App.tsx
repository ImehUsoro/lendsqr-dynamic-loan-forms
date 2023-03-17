import Page from "./components/Page";

import { data } from "./utils/data";

function App() {
  return (
    <div className=" bg-gray-200 mx-auto max-w-screen-xxl py-10">
      <div className="">
        <div className="relative hover-trigger">
          <h1 className="text-center text-4xl text-heading font-semibold mb-28">
            {data.meta.name.toLocaleUpperCase()}
          </h1>
          <div className="absolute bg-darkBlue text-white border border-grey-100 px-4 py-2 hover-target top-0 right-0 rounded-md">
            {data.meta.Description}
          </div>
        </div>

        {data.pages.map((page) => (
          <div className="mb-20" key={page.name}>
            <div className="mb-8 max-w-screen-lg mx-auto">
              <div className="relative hover-trigger  mx-auto flex justify-center max-w-fit">
                <h2 className="text-2xl text-textColor text-center">
                  {page.name}
                </h2>
                <div className="absolute bg-darkBlue text-white border w-96 border-grey-100 px-4 py-2 hover-target -top-4 left-64 rounded-md max-w-lg">
                  {page.description}
                </div>
              </div>
            </div>
            <Page page={page} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
