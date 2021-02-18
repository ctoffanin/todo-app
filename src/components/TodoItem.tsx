import type { FunctionComponent } from 'react';
import type { Todo } from '../types/todos.types';

type TodoProps = {
  todo: Todo;
  index: number;
};

const TodoItem: FunctionComponent<TodoProps> = ({ todo }) => (
  <div className="todo" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
    {todo.title}
  </div>
);

export default TodoItem;
