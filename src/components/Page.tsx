import React from "react";
import Section from "./Section";
import Actions from "./Actions";
import { PageProps } from "../types/PageTyes";

const Pages = ({ page }: PageProps) => {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg mb-8">
        <Section sectionInfo={page.sections} />
      </div>
      <Actions actions={page.actions} />
    </div>
  );
};

export default Pages;
