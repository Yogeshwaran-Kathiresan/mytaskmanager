import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    filter: 'all' | 'completed' | 'pending';
}

const initialState: TaskState = {
    tasks: [],
    filter: 'all',
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<'all' | 'completed' | 'pending'>) => {
            state.filter = action.payload;
        },
        toggleComplete: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        updateTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        }
    },
});

export const { setFilter, toggleComplete, updateTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
