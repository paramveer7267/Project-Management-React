import React from "react";
import Button from "./Button";
const ProjectS = ({
  onStartAddP,
  pro,
  onSelect,
  seletedPI,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddP}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {pro.map((e) => {
          let cssC =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (e.id === seletedPI) {
            cssC += " bg-stone-800 text-stone-200";
          } else {
            cssC += " text-stone-400";
          }
          return (
            <li key={e.id}>
              <button
                onClick={() => onSelect(e.id)}
                className={cssC}
              >
                {e.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectS;
