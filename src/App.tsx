import { FunctionComponent, useEffect, useState } from 'react';
import type { Todo } from './types/todos.types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App: FunctionComponent = () => {
  const [uncompletedTodos, setUncompletedTodos] = useState(0);
  const [todos, setTodos] = useState<Array<Todo>>(
    JSON.parse(localStorage.getItem('todos') || '[]'),
  );

  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    setUncompletedTodos(todos.filter((todo) => !todo.isCompleted).length);

    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;

      default:
        setFilteredTodos(todos);
    }
  }, [todos, status]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-3">Uncompleted Todos ({uncompletedTodos})</h1>
        <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    </div>
  );
};

export default App;
