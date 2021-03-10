import type { FunctionComponent } from 'react';
import type { Todo } from '../todos/todos.types';

type TodoProps = {
  todo: Todo;
  completeTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

const TodoItem: FunctionComponent<TodoProps> = ({ todo, completeTodo, deleteTodo }) => (
  <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
    {todo.title}
    <button type="button" onClick={() => completeTodo(todo)}>
      ✓
    </button>
    <button type="button" onClick={() => deleteTodo(todo)}>
      ✕
    </button>
  </div>
);

export default TodoItem;
