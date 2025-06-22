import React from 'react';
import  type { TaskItemProps } from '../../types';

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  const handleStatusChange = () => {
    const newStatus =
      task.status === 'pending'
        ? 'in-progress'
        : task.status === 'in-progress'
        ? 'completed'
        : 'pending';
    onStatusChange(task.id, newStatus);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor:
          task.status === 'completed'
            ? '#e0ffe0'
            : task.status === 'in-progress'
            ? '#fff8e0'
            : '#f0f0f0',
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={handleStatusChange}>Update Status</button>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  );
};

export default TaskItem;