import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewP = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const des = useRef();
  const dd = useRef();
  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      des.current.value.trim() === "" ||
      dd.current.value.trim() === ""
    ){
      modal.current.showModal()
      return;
    }
      onAdd({
        title: title.current.value,
        des: des.current.value,
        dd: dd.current.value,
      });
  }
  return (
    <>
    <Modal ref={modal} caption="Close">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid output</h2>
      <p className="text-stone-600 mb-4">Add all the deltails to proceed</p>
    </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={des} label="Description" textarea />
          <Input type="date" ref={dd} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewP;
