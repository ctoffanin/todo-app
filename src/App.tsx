import { FunctionComponent, useEffect, useState } from 'react';
import type { Todo } from './types/todos.types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App: FunctionComponent = () => {
  const [pendingTodos, setPendingTodos] = useState(0);
  const [todos, setTodos] = useState<Array<Todo>>(
    JSON.parse(localStorage.getItem('todos') || '[]'),
  );

  useEffect(() => {
    setPendingTodos(todos.filter((todo) => !todo.isCompleted).length);
  }, [todos]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-3">Todo List ({pendingTodos})</h1>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
