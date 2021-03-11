import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import type { Todo, TodoStatus } from '../todos/todos.types';
import { LOCAL_STORAGE_TODOS_KEY } from '../todos/todos.utils';

type FormProps = {
  todos: ReadonlyArray<Todo>;
  setTodos: (todos: ReadonlyArray<Todo>) => void;
  setStatus: (status: TodoStatus) => void;
};

const Form: FunctionComponent<FormProps> = ({ todos, setTodos, setStatus }) => {
  const [value, setValue] = useState('');

  const addTodo = (title: string) => {
    const newTodos = [...todos, { id: Date.now(), title, isCompleted: false }];

    window.localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const onInputChange = (event: ChangeEvent) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  const onSelectChange = (event: ChangeEvent) => {
    setStatus((event.target as HTMLOptionElement).value as TodoStatus);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={onInputChange}
        placeholder="Add new todo"
      />
      <button className="todo-button" type="submit">
        Add
      </button>
      <select name="todos" className="filter-todo" onChange={onSelectChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
