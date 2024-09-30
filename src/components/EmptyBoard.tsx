
import clipBoard from '../assets/clipboard.svg'
import styles from './EmptyBoard.module.css'

export function EmptyBoard(){
    return(
        <div className={styles.container}>
            <img src={clipBoard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )

}