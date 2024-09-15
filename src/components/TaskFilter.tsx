import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setFilter } from '../redux/taskSlice';

const TaskFilter: React.FC = () => {
    const { filter } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();

    return (
        <div className="flex space-x-4 mb-6">
            <button
                onClick={() => dispatch(setFilter('all'))}
                className={`px-4 py-2 rounded-lg hover:bg-green-300 hover:text-black ${filter === 'all' ? 'bg-black text-white' : 'bg-gray-200'
                    }`}
            >
                All
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))}
                className={`px-4 py-2 rounded-lg hover:bg-green-300 hover:text-black ${filter === 'completed' ? 'bg-black text-white' : 'bg-gray-200'
                    }`}
            >
                Completed
            </button>
            <button
                onClick={() => dispatch(setFilter('pending'))}
                className={`px-4 py-2 rounded-lg hover:bg-green-300 hover:text-black ${filter === 'pending' ? 'bg-black text-white' : 'bg-gray-200'
                    }`}
            >
                Pending
            </button>
        </div>

    );
};

export default TaskFilter;
