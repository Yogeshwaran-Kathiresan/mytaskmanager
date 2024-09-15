import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { Task, updateTasks } from '../redux/taskSlice';
import { addTask } from '../utils/taskUtils';

const TaskInput: React.FC = () => {
    const { tasks } = useSelector((state: RootState) => state.tasks);

    const [title, setTitle] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title).then((response: Task) => {
                const updatedTasks = [...tasks, response];
                dispatch(updateTasks(updatedTasks));
            })
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-6">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                className="w-4/5 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
            <button
                type="submit"
                className="px-4 py-2 w-1/5 bg-green-700 text-white rounded-lg hover:bg-green-800"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskInput;
