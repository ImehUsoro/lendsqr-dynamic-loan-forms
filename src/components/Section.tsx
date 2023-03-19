import React from "react";
import FormInput from "./FormInput";
import { SectionTypes } from "../types/PageTypes";

interface SectionProps {
  sectionInfo: SectionTypes[];
}
const Section = ({ sectionInfo }: SectionProps) => {
  return (
    <>
      {sectionInfo.map((section) => (
        <div
          className="p-10 bg-white rounded-md shadow-md mb-10"
          key={section.name}
        >
          <div>
            <div className="relative hover-trigger max-w-fit mb-10 mx-auto">
              <h2 className="text-lg text-textColor">{section.name}</h2>
              <div
                className={`absolute bg-darkBlue text-white border border-grey-100 px-4 py-2 hover-target w-96 ${
                  section.name !== "Student details" ? "-top-8" : "-top-4"
                } left-36 rounded-md max-w-sm`}
              >
                {section.description}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-16 w-full place-items-start">
              {section.fields.map((field) => (
                <FormInput
                  id={field.id}
                  placeholder={field.label}
                  key={field.name}
                  type={field.type}
                  required={field.validation?.required || false}
                  name={field.name}
                  options={field.options}
                  rows={field.validation?.number_of_lines}
                  description={field.description}
                  max={Number(field.validation?.maximum)}
                  min={Number(field.validation?.minimum)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Section;
