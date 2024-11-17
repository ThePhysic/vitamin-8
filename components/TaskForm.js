import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const TaskForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTask(task)); // Dispatch addTask action
            setTask(''); // Clear input field
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ fontSize: '16px', padding: '10px' }}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                        padding: '10px 15px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                    }}
                >
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
