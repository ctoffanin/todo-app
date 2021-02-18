import type { FunctionComponent } from 'react';

const TodoList: FunctionComponent = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list" />
      <li>todo one</li>
      <li>todo two</li>
      <li>todo five</li>
    </div>
  );
};

export default TodoList;
