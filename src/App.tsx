import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import type { Task, Role, TaskStatus } from './types/Task';
import TaskCard from './components/TaskCard';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

interface TaskForm {
  title: string;
  description: string;
  role: Role;
  deadline: string;
  status: TaskStatus;
}

export default function App() {
  const { tasks, addTask, deleteTask } = useTasks();

  const [form, setForm] = useState<TaskForm>({
    title: '',
    description: '',
    role: 'Developer',
    deadline: '',
    status: 'pending',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    // Aseguramos que el value se caste a los tipos correctos si es necesario
    const { name, value } = e.target;

    // Opcional: forzamos el casteo en el caso de role y status
    if (name === 'role') {
      setForm({ ...form, role: value as Role });
    } else if (name === 'status') {
      setForm({ ...form, status: value as TaskStatus });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      ...form,
    };

    addTask(newTask);

    setForm({
      title: '',
      description: '',
      role: 'Developer',
      deadline: '',
      status: 'pending',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container">
        <header className="header">
          <h1>📋 TaskFlow</h1>
        </header>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="input-group">
              <label htmlFor="title">Task Title</label>
              <input
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter task title"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter task description"
              />
            </div>

            <div className="input-group">
              <label htmlFor="role">Assigned Role</label>
              <select id="role" name="role" value={form.role} onChange={handleChange}>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={form.deadline}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" value={form.status} onChange={handleChange}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Add Task
            </button>
          </form>
        </div>

        <div className="tasks-grid">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </div>
      </div>
    </div>
  );
}
