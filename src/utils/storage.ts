import { type Task } from '../types/Task';

const TASKS_KEY = 'taskflow-tasks';

export const getTasks = (): Task[] => {
  const raw = localStorage.getItem(TASKS_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
