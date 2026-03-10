import ToDoItem from "./Todoitem";

function ToDoList({ tasks, deleteTask, toggleTask, editTask }) {

  return (
    <ul className="todo-list">

      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}

    </ul>
  );
}

export default ToDoList;