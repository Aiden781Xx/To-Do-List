import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskSearch from './components/TaskSearch';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="flex flex-col min-h-screen bg-yellow-50">
        <Header />
        
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-4 pb-12">
            <TaskForm />
            <TaskSearch />
            <TaskList />
          </div>
        </main>
        
        <footer className="border-t border-gray-200 bg-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>TaskFlow © {new Date().getFullYear()} | Stay productive, stay organized</p>
          </div>
        </footer>
      </div>
    </TaskProvider>
  );
}

export default App;