import { FunctionComponent, useMemo, useState } from 'react';
import type { Todo, TodoStatus } from './todos/todos.types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import TodoList from './components/TodoList';
import { LOCAL_STORAGE_TODOS_KEY } from './todos/todos.utils';

const App: FunctionComponent = () => {
  const [status, setStatus] = useState<TodoStatus>('all');
  const [todos, setTodos] = useState<ReadonlyArray<Todo>>(() => {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY) || '[]');
    } catch (error) {
      throw new Error(`JSON parse error: ${error.message}`);
    }
  });

  const filteredTodos = useMemo(() => {
    switch (status) {
      case 'completed':
        return todos.filter((todo) => todo.isCompleted);
      case 'uncompleted':
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  }, [todos, status]);

  const uncompletedTodosCount = useMemo(() => todos.filter((todo) => !todo.isCompleted).length, [
    todos,
  ]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-3">Uncompleted Todos ({uncompletedTodosCount})</h1>
        <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>
    </div>
  );
};

export default App;
