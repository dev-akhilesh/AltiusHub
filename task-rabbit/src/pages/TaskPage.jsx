import React, { useEffect, useState } from 'react'

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('api/tasks')
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskPage