import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask, tasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: Title,
      description: description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-[#306596] p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3 text-center"> To Do List</h1>
        <input
          type="text"
          placeholder="Task Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={Title}
          autoFocus
          className="bg-slate-300 p-3 rounded-md w-full mb-2"
          required
        />
        <textarea
          placeholder="Task Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 rounded-md w-full mb-2"
          required
        />
        <br />
        <button type="submit" className="bg-blue-700 px-3 py-1 text-white rounded-md hover:bg-blue-600">
          Save
        </button>
        <p className="text-xl font-bold text-white text-right m-3">
          Remaining tasks: { tasks.length }
        </p>
      </form>
    </div>
  );
}

export default TaskForm;
