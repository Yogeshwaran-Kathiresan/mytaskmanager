import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { Task, toggleComplete, updateTasks } from '../redux/taskSlice';
import { fetchTasks } from '../utils/taskUtils';

const TaskList: React.FC = () => {
    const { tasks, filter } = useSelector((state: RootState) => state.tasks);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        fetchTasks().then((response: Task[]) => { dispatch(updateTasks(response)) });
    }, [dispatch]);

    const handleDelete = (id: number) => {
        const filteredTasks = tasks.filter((value) => value.id !== id);
        dispatch(updateTasks(filteredTasks));
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    return (
        <ul className="space-y-4">
            {filteredTasks.map((task) => (
                <li
                    key={task.id}
                    className="flex items-center justify-between p-3 border rounded-lg shadow-sm bg-white"
                >
                    <div className="flex items-center space-x-4">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleComplete(task.id))}
                            className="h-5 w-5 accent-green-600"
                        />
                        <span
                            className={`${task.completed ? 'line-through text-gray-400' : ''
                                } text-lg`}
                        >
                            {task.title}
                        </span>
                    </div>
                    <button
                        onClick={() => handleDelete(task.id)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
