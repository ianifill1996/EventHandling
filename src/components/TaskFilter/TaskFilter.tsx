import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus } from '../../types';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');

  const applyFilters = () => {
    onFilterChange({
      status: status || undefined,
      priority: priority || undefined,
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value as any)} style={{ marginLeft: '10px' }}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button onClick={applyFilters} style={{ marginLeft: '10px' }}>
        Apply Filters
      </button>
    </div>
  );
};

export default TaskFilter;