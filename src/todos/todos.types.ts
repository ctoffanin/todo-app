export type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type TodoStatus = 'all' | 'completed' | 'uncompleted';
