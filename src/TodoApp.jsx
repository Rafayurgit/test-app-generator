import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        placeholder="Add a new task"
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleEnter}
        style={{ width: '70%', padding: '0.5em' }}
      />
      <button onClick={addTodo} style={{ padding: '0.5em', marginLeft: '0.5em' }}>Add</button>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '1em 0', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              style={{ marginRight: '0.5em' }}
            />
            <span style={{ flexGrow: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '0.5em' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;