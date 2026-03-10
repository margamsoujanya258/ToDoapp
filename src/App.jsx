import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/Todolist";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Add Task
  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Edit Task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  };

  return (
    <div className="container">

      <Header />

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

    </div>
  );
}

export default App;