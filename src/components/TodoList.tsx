import type { FunctionComponent } from 'react';
import type { Todo } from '../types/todos.types';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: ReadonlyArray<Todo>;
  setTodos: (todos: Array<Todo>) => void;
};

const TodoList: FunctionComponent<TodoListProps> = ({ todos, setTodos }) => {
  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;

    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="todos">
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            index={index}
            key={todo.id}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
