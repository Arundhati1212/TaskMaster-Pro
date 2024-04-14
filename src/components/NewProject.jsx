import Input from "./Input";
import Modal from "./Modal";
import { useRef, useState } from "react";
export default function NewProject({ handleAddProject, handleCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    //validate

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
    } else {
      handleAddProject({
        title,
        description,
        dueDate,
      });
    }
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Entry</h2>
        <p className="text-stone-600 mb-4">Please enter a valid input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancel}
              className="text-stone-800 hover:text-stone-950"
            >
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
          <Input
            ref={titleRef}
            title={"Title"}
            type={"text"}
            textarea={false}
          />
          <Input ref={descriptionRef} title={"Description"} textarea={true} />
          <Input
            ref={dueDateRef}
            title={"Due Date"}
            type={"date"}
            textarea={false}
          />
        </div>
      </div>
    </>
  );
}
