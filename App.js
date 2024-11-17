import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h1 className="text-center mb-4" style={{ fontSize: '28px' }}>To-Do List</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
