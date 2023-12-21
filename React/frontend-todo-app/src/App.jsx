import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTodo, deleteTodo, editTodo, moveTodoUp, moveTodoDown }) => {
  return (
    <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
      {todo.text}
      <div className="actions">
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => editTodo(index)}>Edit</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
        <button onClick={() => moveTodoUp(index)} disabled={index === 0}>Up</button>
        <button onClick={() => moveTodoDown(index)} disabled={index === todo.length - 1}>Down</button>
      </div>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Task 1', isCompleted: false },
    { text: 'Task 2', isCompleted: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTodo = () => {
    if (newTask) {
      setTodos([...todos, { text: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const updatedText = prompt('Edit task:', todos[index].text);
    if (updatedText) {
      const updatedTodos = [...todos];
      updatedTodos[index].text = updatedText;
      setTodos(updatedTodos);
    }
  };

  const moveTodo = (fromIndex, toIndex) => {
    const updatedTodos = [...todos];
    const [movedTodo] = updatedTodos.splice(fromIndex, 1);
    updatedTodos.splice(toIndex, 0, movedTodo);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>ToDo App</h1>
      <div className="input-section">
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a new task" />
        <button onClick={addTodo}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          moveTodoUp={(fromIndex) => moveTodo(fromIndex, fromIndex - 1)}
          moveTodoDown={(fromIndex) => moveTodo(fromIndex, fromIndex + 1)}
        />
      ))}
    </div>
  );
};

export default App;
