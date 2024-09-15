import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

const App: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default App;
