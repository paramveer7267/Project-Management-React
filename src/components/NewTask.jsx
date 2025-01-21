import { useState } from "react";

const NewTask = ({onAdd}) => {
  const [enterTask, setEnterTask] = useState('');

  function handleChange(e) {
    setEnterTask(e.target.value);
  }
  function handleClick() {
    if(enterTask.trim() === ''){
      return
    }
    onAdd(enterTask)
    setEnterTask('')
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enterTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
