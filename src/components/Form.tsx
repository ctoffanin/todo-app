import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import type { Todo } from '../types/todos.types';

type FormProps = {
  todos: Array<Todo>;
  setTodos: (todos: Array<Todo>) => void;
};

const Form: FunctionComponent<FormProps> = ({ todos, setTodos }) => {
  const [value, setValue] = useState('');

  const addTodo = (title: string) => {
    const newTodos = [...todos, { id: Date.now(), title, completed: false }];
    setTodos(newTodos);
  };

  const handleValue = (event: ChangeEvent) => {
    setValue((event.target as HTMLTextAreaElement).value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={handleValue}
        placeholder="Add new todo"
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
