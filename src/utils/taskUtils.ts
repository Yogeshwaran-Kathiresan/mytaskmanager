export const fetchTasks = async () => {
    const response = await fetch('/data/tasks.json');
    return response.json();
};

export const addTask = async (title: string) => {
    const response = await fetch('/data/tasks.json');
    const tasks = await response.json();
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false,
    };
    return newTask;
};