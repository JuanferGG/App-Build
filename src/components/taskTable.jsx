import React from "react";
import TaskRow from "./taskRow";

const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
    

    const taskTableRows = (doneValue) => {
        return (
            tasks
            .filter(task => task.done === doneValue)
            .map((task) => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
            ))
        )
    }

    return (
        <table className='table table-dark table-striped table-bordered border-secundary'>
            <thead>
                <tr className='table-primary'>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(showCompleted)
                }
            </tbody>
        </table>
    );
};

export default TaskTable;
