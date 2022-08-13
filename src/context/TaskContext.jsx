import { useState, createContext, useEffect } from "react";
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: task.title,
            description: task.description,
        }]);
    };


    function deleteTask(task) {
        setTasks(tasks.filter(t => t.id !== task));
    };

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
