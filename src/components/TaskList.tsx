import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { CheckCheck, ListChecks, ListX } from 'lucide-react';

const TaskList: React.FC = () => {
  const { 
    filteredTasks, 
    filterStatus,
    setFilterStatus,
    filterPriority,
    setFilterPriority,
    filterCategory,
    setFilterCategory
  } = useTaskContext();

  const statusFilters = [
    { value: 'all', label: 'All', icon: <ListChecks className="w-4 h-4" /> },
    { value: 'active', label: 'Active', icon: <ListX className="w-4 h-4" /> },
    { value: 'completed', label: 'Completed', icon: <CheckCheck className="w-4 h-4" /> }
  ];

  const priorityFilters = [
    { value: 'all', label: 'All Priorities' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ];

  const categoryFilters = [
    { value: 'all', label: 'All Categories' },
    { value: 'work', label: 'Work' },
    { value: 'personal', label: 'Personal' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'health', label: 'Health' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value as any)}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md ${
                filterStatus === filter.value
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value as any)}
            className="px-3 py-1.5 text-sm rounded-md border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            {priorityFilters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value as any)}
            className="px-3 py-1.5 text-sm rounded-md border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            {categoryFilters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-16 px-4">
          <div className="bg-gray-100 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
            <ListChecks className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No tasks found</h3>
          <p className="text-gray-500">
            {filterStatus === 'all' && filterPriority === 'all' && filterCategory === 'all'
              ? "You haven't created any tasks yet. Add your first task to get started!"
              : "No tasks match your current filters. Try changing your filters or add a new task."}
          </p>
        </div>
      ) : (
        <div className="space-y-1">
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;