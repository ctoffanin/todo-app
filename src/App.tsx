import { FunctionComponent, useState } from 'react';
import type { Todo } from './types/todos.types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: true,
    },
    { id: 3, title: 'Task 3', isCompleted: false },
  ]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-3">Todo List</h1>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
