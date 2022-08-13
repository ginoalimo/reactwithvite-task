import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {

    const [Title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {createTask} = useContext(TaskContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title: Title,
            description: description,
        });
        setTitle('');
        setDescription('');
    }


    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'> Crear tarea nueva</h1>
            <input type="text" placeholder="Titulo de la tarea"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                value={Title}
                autoFocus
                className='bg-slate-300 p-3 rounded-md w-full mb-2'
            />
            <textarea placeholder="Descripcion de la tarea"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                value={description}
                className='bg-slate-300 p-3 rounded-md w-full mb-2'
            /><br />
            <button type="submit" className='bg-indigo-500 px-3 py-1 text-white'>Save</button>
        </form>
        </div>

    )
}

export default TaskForm