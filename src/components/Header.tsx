import React from 'react';
import { ListTodo } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';

const Header: React.FC = () => {
  const { tasks } = useTaskContext();
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-6 mb-8 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <ListTodo className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">TaskFlow</h1>
          </div>
          
          <div className="hidden sm:flex space-x-6 text-sm font-medium">
            <div className="bg-white/10 rounded-full px-3 py-1 flex items-center">
              <span className="mr-1">{tasks.length}</span>
              <span className="text-white/80">Total</span>
            </div>
            <div className="bg-white/10 rounded-full px-3 py-1 flex items-center">
              <span className="mr-1">{pendingTasks}</span>
              <span className="text-white/80">Pending</span>
            </div>
            <div className="bg-white/10 rounded-full px-3 py-1 flex items-center">
              <span className="mr-1">{completedTasks}</span>
              <span className="text-white/80">Completed</span>
            </div>
          </div>
        </div>
        
        <div className="sm:hidden mt-4 flex justify-around space-x-2 text-xs font-medium">
          <div className="bg-white/10 rounded-full px-3 py-1 flex items-center">
            <span className="mr-1">{tasks.length}</span>
            <span className="text-white/80">Total</span>
          </div>
          <div className="bg-white/10 rounded-full px-3 py-1 flex items-center">
            <span className="mr-1">{pendingTasks}</span>
            <span className="text-white/80">Pending</span>
          </div>
          <div className="bg-white/10 rounded-full px-3 py-1 flex items-center">
            <span className="mr-1">{completedTasks}</span>
            <span className="text-white/80">Completed</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;