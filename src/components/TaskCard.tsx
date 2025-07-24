import { useState } from 'react';
import type { Task } from "../types/Task";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onDelete }: Props) {
  const [isConfirming, setIsConfirming] = useState(false);
  
  const handleDeleteClick = () => {
    if (!isConfirming) {
      setIsConfirming(true);
      setTimeout(() => setIsConfirming(false), 2000);
      return;
    }
    onDelete(task.id);
  };

  const getRoleClass = () => {
    const roleMap: Record<string, string> = {
      'Manager': 'role-manager',
      'Developer': 'role-developer',
      'Designer': 'role-designer'
    };
    return roleMap[task.role] || 'role-developer';
  };

  const getStatusClass = () => {
    const statusMap: Record<string, string> = {
      'pending': 'status-pending',
      'in-progress': 'status-in-progress',
      'done': 'status-done'
    };
    return statusMap[task.status] || 'status-pending';
  };

  const getStatusBarClass = () => {
    const statusBarMap: Record<string, string> = {
      'pending': 'status-bar-pending',
      'in-progress': 'status-bar-in-progress',
      'done': 'status-bar-done'
    };
    return statusBarMap[task.status] || 'status-bar-in-progress';
  };

  const formatDeadline = () => {
    if (!task.deadline) return '';
    const date = new Date(task.deadline);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="task-card">
      <div className="task-card-content">
        <div className="task-card-header">
          <div>
            <h3 className="task-card-title">{task.title}</h3>
            <span className={`role-tag ${getRoleClass()}`}>
              {task.role}
            </span>
          </div>
          <span className={`status-badge ${getStatusClass()}`}>
            {task.status.replace('-', ' ')}
          </span>
        </div>
        
        <p className="task-card-description">
          {task.description || <span className="text-gray-400 italic">No description provided</span>}
        </p>
        
        <div className="task-card-footer">
          <div className="deadline-container">
            <svg className="deadline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{task.deadline ? formatDeadline() : 'No deadline'}</span>
          </div>
        </div>
      </div>
      
      <div className={`status-bar ${getStatusBarClass()}`}></div>
      
    <button 
  className={`delete-btn ${isConfirming ? 'confirming' : ''}`}
  onClick={handleDeleteClick}
  aria-label={isConfirming ? "Confirm delete" : "Delete task"}
  type="button"
>
  {!isConfirming ? (
    <svg
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      width="20" 
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <span className="absolute text-xs font-bold text-red-600 dark:text-red-300">✓</span>
  )}
</button>

    </div>
  );
}