import { FunctionComponent, useEffect, useState } from 'react';
import type { Todo } from './todos/todos.types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import TodoList from './components/TodoList';
import { LOCAL_STORAGE_TODOS_KEY } from './todos/todos.utils';

const App: FunctionComponent = () => {
  const [uncompletedTodos, setUncompletedTodos] = useState(0);
  const [todos, setTodos] = useState<ReadonlyArray<Todo>>(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY) || '[]'),
  );

  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState<ReadonlyArray<Todo>>([]);

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
