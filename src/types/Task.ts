export type TaskStatus = 'pending' | 'in-progress' | 'done';
export type Role = 'Manager' | 'Developer' | 'Designer';

export interface Task {
  id: string;
  title: string;
  description: string;
  role: Role;
  deadline: string;
  status: TaskStatus;
}
