import React, { useState } from 'react';
import { Task } from '../types';
import { useTaskContext } from '../context/TaskContext';
import { Calendar, CheckCircle2, Circle, Clock, Edit, Trash } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';
import TaskEditForm from './TaskEditForm';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleComplete, deleteTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-amber-100 text-amber-800',
    high: 'bg-red-100 text-red-800'
  };

  const categoryColors = {
    work: 'bg-purple-100 text-purple-800',
    personal: 'bg-green-100 text-green-800',
    shopping: 'bg-indigo-100 text-indigo-800',
    health: 'bg-teal-100 text-teal-800',
    other: 'bg-gray-100 text-gray-800'
  };

  // Check if task is overdue
  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  if (isEditing) {
    return <TaskEditForm task={task} onClose={() => setIsEditing(false)} />;
  }

  return (
    <div className={`mb-4 p-4 rounded-lg border transition-all duration-200 ${
      task.completed 
        ? 'bg-gray-50 border-gray-200' 
        : isOverdue 
          ? 'bg-red-50 border-red-200' 
          : 'bg-white border-gray-200 hover:border-blue-300'
    }`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => toggleComplete(task.id)}
          className="mt-1 flex-shrink-0 text-gray-500 hover:text-blue-500 transition-colors duration-200"
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>

        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {task.title}
            </h3>
            
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
            
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${categoryColors[task.category]}`}>
              {task.category}
            </span>
          </div>
          
          {task.description && (
            <p className={`text-sm mb-2 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {task.description}
            </p>
          )}
          
          {task.dueDate && (
            <div className={`flex items-center text-xs ${
              isOverdue ? 'text-red-600' : task.completed ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {isOverdue ? <Clock className="w-3 h-3 mr-1" /> : <Calendar className="w-3 h-3 mr-1" />}
              {isOverdue ? 'Overdue: ' : 'Due: '}
              {formatDate(task.dueDate)}
            </div>
          )}
        </div>

        <div className="flex gap-1 flex-shrink-0">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-blue-500 transition-colors duration-200"
            aria-label="Edit task"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label="Delete task"
          >
            <Trash className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;