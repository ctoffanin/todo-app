import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import type { Todo } from '../types/todos.types';

type FormProps = {
  todos: ReadonlyArray<Todo>;
  setTodos: (todos: Array<Todo>) => void;
};

const Form: FunctionComponent<FormProps> = ({ todos, setTodos }) => {
  const [value, setValue] = useState('');

  const addTodo = (title: string) => {
    const newTodos = [...todos, { id: Date.now(), title, isCompleted: false }];

    window.localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const onChange = (event: ChangeEvent) => {
    setValue((event.target as HTMLTextAreaElement).value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={onChange}
        placeholder="Add new todo"
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
