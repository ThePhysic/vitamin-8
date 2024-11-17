import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks); // Access tasks from Redux store
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteTask(index)); // Dispatch deleteTask action
    };

    return (
        <ul className="list-group">
            {tasks.map((task, index) => (
                <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{ padding: '10px 15px', fontSize: '16px' }} // Adjust spacing and font size
                >
                    <span>{task}</span>
                    <button
                        onClick={() => handleDelete(index)}
                        className="btn btn-danger btn-sm"
                        style={{
                            padding: '5px 10px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                        }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
