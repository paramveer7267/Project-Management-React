import React from "react";
import Tasks from "./Tasks";

const SelectedP = ({
  pro,
  onDel,
  onDelTask,
  onAddTask,
  tasks,
}) => {
  const formatDate = new Date(pro.dd).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center  justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {pro.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDel}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {pro.des}
        </p>
      </header>
      <Tasks
        onAdd={onAddTask}
        onDelete={onDelTask}
        tasks={tasks}
      ></Tasks>
    </div>
  );
};

export default SelectedP;
