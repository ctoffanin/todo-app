import type { FunctionComponent } from 'react';
import type { Todo } from '../todos/todos.types';
import { LOCAL_STORAGE_TODOS_KEY } from '../todos/todos.utils';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: ReadonlyArray<Todo>;
  setTodos: (todos: ReadonlyArray<Todo>) => void;
  filteredTodos: ReadonlyArray<Todo>;
};

const TodoList: FunctionComponent<TodoListProps> = ({ todos, setTodos, filteredTodos }) => {
  const completeTodo = (todo: Todo) => {
    const todoIndex = todos.findIndex((item) => item.id === todo.id);
    const updatedListOfTodos = [...todos];

    updatedListOfTodos[todoIndex] = {
      ...updatedListOfTodos[todoIndex],
      isCompleted: true,
    };

    window.localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(updatedListOfTodos));
    setTodos(updatedListOfTodos);
  };

  const deleteTodo = (todo: Todo) => {
    const todoIndex = todos.findIndex((item) => item.id === todo.id);
    const updatedListOfTodos = [...todos];

    updatedListOfTodos.splice(todoIndex, 1);

    window.localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(updatedListOfTodos));
    setTodos(updatedListOfTodos);
  };

  return (
    <div className="todo-container">
      <div className="todos">
        {filteredTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
