import { useState, ChangeEvent } from 'react'
import {PlusCircle} from 'phosphor-react'
import { v4 as uuid } from 'uuid'

import styles from './Input.module.css'

interface InputProps {
    onAddComment: Function;
}
export function Input({onAddComment}: InputProps){
    const [inputText,setInputText] = useState('')

    function handleCommentsChange(event:ChangeEvent<HTMLInputElement>){
        event.preventDefault()
        event.target.setCustomValidity('')
        setInputText(event.target.value)
    }

    function handleAddComment(){
        const newTodoItem = {
            id: uuid(),
            task: inputText,
            completed: false
        };
        onAddComment(newTodoItem)
        setInputText('')
    }

    const isTodoInvalid =  inputText.length === 0

    return(
        <div className={styles.container}>
            <input 
                type="text"
                placeholder='Adicione uma nova tarefa'
                value={inputText}
                onChange={handleCommentsChange}
            />
            <button onMouseDown={handleAddComment} disabled={isTodoInvalid}>
                <span>Criar</span>
                <PlusCircle size={20} color="#f2f2f2" weight="bold" />
            </button>
        </div>
    )
}