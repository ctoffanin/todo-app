import { FunctionComponent, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Task 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Task 2',
      completed: true,
    },
    { id: 3, title: 'Task 3', completed: false },
  ]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-3">Todo List</h1>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
