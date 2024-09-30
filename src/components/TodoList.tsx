import { ChangeEvent } from 'react'
import { Trash } from 'phosphor-react'

import styles from './TodoList.module.css'

interface TodoListProps {
    id: string
    task: string;
    completed: boolean
    onCheckClicked: Function
    onDeleteTask: Function
}

export function TodoList({id, task,completed, onCheckClicked, onDeleteTask}:TodoListProps){
    function handleTogleChange(event: ChangeEvent<HTMLInputElement>){
        console.log(event.target.checked)
        onCheckClicked(id, event.target.checked)
    }

    function handleDeletTask(){
        onDeleteTask(id)
    }

    return(
        <div className={styles.container}>
            <div>
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={handleTogleChange}
                />
                <p className={completed ? styles.completed : ''}>{task}</p>
            </div>
            <button onMouseDown={handleDeletTask} type="submit">
                <Trash size={16} />
            </button>
        </div>
    )
}