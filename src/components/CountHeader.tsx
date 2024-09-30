import styles from './CountHeader.module.css'

interface CountHeaderProps {
    totalTasks: number;
    totalTasksDone: number
}

export function CountHeader({totalTasks, totalTasksDone}:CountHeaderProps){
    
    return(
        <header className={styles.header}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{totalTasks}</span>
            </aside>
            <aside>
                <p>Concluídas</p>
                <span>
                    {totalTasksDone === 0 
                        ? "0" 
                        : `${totalTasksDone} de ${totalTasks}`}
                </span>
            </aside>
        </header>
    )
}