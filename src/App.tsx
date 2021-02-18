import type { FunctionComponent } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SubmitForm from './components/SubmitForm';
import TodoList from './components/TodoList';

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <div className="container">
        <header className="text-center mb-4">
          <h1>Todo List</h1>
        </header>

        <SubmitForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
