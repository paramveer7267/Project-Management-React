import React from "react";
import Button from "./Button";

import noPI from "../assets/no-projects.png";
const NoPS = ({onStartAddP}) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noPI}
        alt="An empty list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with new one</p>
      <p>
        <Button onClick={onStartAddP}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoPS;
