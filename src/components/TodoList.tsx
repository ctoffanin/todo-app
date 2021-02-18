import type { FunctionComponent } from 'react';
import type { Todo } from '../types/todos.types';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Array<Todo>;
};

const TodoList: FunctionComponent<TodoListProps> = ({ todos }) => (
  <div className="todo-container">
    <div className="todos">
      {todos.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} />
      ))}
    </div>
  </div>
);

export default TodoList;
