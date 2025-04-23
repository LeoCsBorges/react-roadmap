import { useState } from 'react'
import './ToDoList.css'
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export function ToDoList() {
    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(newTask.trim() === '') { return; }
        setToDoList([...toDoList, { id: toDoList.length + 1, description: newTask }]);
        setNewTask("");
    }

    function handleReset(event) {
        event.preventDefault();
        setNewTask('');
    }

    return (
        <>
            <h1>To Do List</h1>
            <form action="#" onSubmit={handleSubmit}>
                <Input className='input' type='text' placeholder='Enter the task' value={newTask} onChange={handleChange} />
                <div className='container__buttons'>
                    <Button type='submit'>
                        Send
                    </Button>
                    <Button type='reset' onClick={handleReset}>
                        Clean
                    </Button>
                </div>
            </form>

            <ul>
                {toDoList.map((task) => (<li key={task.id}>{task.description}</li>))}
            </ul>
        </>
    )
}
