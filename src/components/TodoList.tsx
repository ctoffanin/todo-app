import type { FunctionComponent } from 'react';
import type { Todo } from '../types/todos.types';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: ReadonlyArray<Todo>;
  setTodos: (todos: ReadonlyArray<Todo>) => void;
  filteredTodos: ReadonlyArray<Todo>;
};

const TodoList: FunctionComponent<TodoListProps> = ({ todos, setTodos, filteredTodos }) => {
  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;

    window.localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    window.localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="todos">
        {filteredTodos.map((todo, index) => (
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
