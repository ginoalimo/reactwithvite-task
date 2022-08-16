import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext);

    return (

        <div className='bg-[#306596] text-white p-4 rounded-md break-all'>
            <h1 className='text-xl font-bold'>Task Title: {task.title}</h1>
            <p className='text-slate-400 text-sm mt-1' >Task Description: {task.description}</p>
            <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' type="submit" onClick={() => deleteTask(task.id)}>Remove task</button>
        </div>

    )
}

export default TaskCard;