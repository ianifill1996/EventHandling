# Task Management App

This project is a React + TypeScript application that demonstrates dynamic list rendering, conditional rendering, filtering, and proper component composition using props and interfaces. It includes three main components: TaskList, TaskItem, and TaskFilter.

## Features

- Render a dynamic list of tasks with status and priority
- Filter tasks by status and priority
- Update task status
- Delete tasks
- Type-safe props using TypeScript interfaces
- Modular and reusable component structure

## Project Structure

src/
├── components/
│ ├── TaskList/
│ │ └── TaskList.tsx
│ ├── TaskItem/
│ │ └── TaskItem.tsx
│ └── TaskFilter/
│ └── TaskFilter.tsx
└── types/
└── index.ts

csharp
Copy
Edit

## Example Usage

In `App.tsx`:

```tsx
import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import { Task, TaskStatus } from './types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Write documentation',
    description: 'Complete the README for the repo',
    status: 'pending',
    priority: 'high',
    dueDate: '2025-06-25',
  },
  {
    id: '2',
    title: 'Fix login bug',
    description: 'Users cannot log in with Safari',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2025-06-22',
  },
];

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

  return (
    <div>
      <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
Component Documentation
TaskList
Purpose: Displays a list of tasks using the TaskItem component.

Props:

tasks: Task[] – The array of tasks to display

onStatusChange: (taskId: string, newStatus: TaskStatus) => void – Handles status update

onDelete: (taskId: string) => void – Handles task deletion

TaskItem
Purpose: Renders a single task with details and actions to update status or delete the task.

Props:

task: Task – Task data object

onStatusChange: (taskId: string, newStatus: TaskStatus) => void – Triggered on status update

onDelete: (taskId: string) => void – Triggered on task deletion

TaskFilter
Purpose: Allows filtering of tasks based on status and priority.

Props:

onFilterChange: (filters: { status?: TaskStatus; priority?: 'low' | 'medium' | 'high' }) => void – Sends selected filters to parent

Types Overview
Defined in types/index.ts:

ts
Copy
Edit
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}
How to Run the App
Clone the repository

Run npm install

Start the development server with npm run dev (if using Vite)

Open the browser at http://localhost:5173 (or the port Vite assigns)
