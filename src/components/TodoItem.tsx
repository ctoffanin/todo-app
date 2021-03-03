import type { FunctionComponent } from 'react';
import type { Todo } from '../todos/todos.types';

type TodoProps = {
  todo: Todo;
  index: number;
  completeTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
};

const TodoItem: FunctionComponent<TodoProps> = ({ todo, index, completeTodo, deleteTodo }) => (
  <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
    {todo.title}
    <button type="button" onClick={() => completeTodo(index)}>
      ✓
    </button>
    <button type="button" onClick={() => deleteTodo(index)}>
      ✕
    </button>
  </div>
);

export default TodoItem;
