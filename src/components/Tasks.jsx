import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">
        Tasks
      </h2>
      <NewTask onAdd={onAdd}></NewTask>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project Has no tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((e) => (
            <li
              key={e.id}
              className="flex justify-between my-4"
            >
              <span>{e.text}</span>
              <button
                onClick={() => onDelete(e.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
