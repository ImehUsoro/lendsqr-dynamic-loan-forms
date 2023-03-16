import React from "react";
import FormInput from "./FormInput";

const BasicInformation = () => {
  return (
    <>
      {" "}
      <h2 className="text-2xl text-textColor mb-8">Basic Information Form</h2>
      <div className="p-10 bg-white rounded-md shadow-md ">
        <div className="flex justify-between mb-8">
          <FormInput
            required
            type="text"
            placeholder={"Name"}
            name="Name"
            format="input"
          />
          <FormInput
            required
            format="input"
            type="text"
            placeholder={"Description"}
            name="Description"
          />
        </div>

        <div className="flex justify-between mb-8">
          <FormInput
            required
            format="input"
            type="text"
            placeholder={"Version"}
            name="Version"
          />
          <FormInput
            required
            type="text"
            name="URL"
            format="input"
            placeholder={"Website URL"}
          />
        </div>

        <div className="flex justify-between mb-8">
          <FormInput
            required
            type="text"
            name="Status"
            format="select"
            placeholder={"Status"}
          />
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
