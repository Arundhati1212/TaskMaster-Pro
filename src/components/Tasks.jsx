import NewTask from "./NewTask";

export default function Tasks({ tasks, handleAddTask, handleDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask handleAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">There are currently no tasks</p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between my-4">
              <p className=" capitalize ">{task}</p>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => handleDeleteTask(task)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
