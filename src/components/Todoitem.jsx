import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleTask, editTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? "completed" : ""}>

      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTask(task.id)}>
            {task.text}
          </span>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </>
      )}

    </li>
  );
}

export default ToDoItem;