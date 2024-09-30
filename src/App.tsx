import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { EmptyBoard } from './components/EmptyBoard'
import { CountHeader } from './components/CountHeader'
import { TodoList } from './components/TodoList'

import styles from './App.module.css'
import './global.css'

interface TodoItem {
  id: string;
  task: string
  completed: boolean;
}


function App() {
  const [todoList,setTodoList] = useState<TodoItem[]>([]);
  const [totalTasks,setTotalTasks] = useState<number>(0)
  const [totalDone,setTotalDone] = useState<number>(0)

  const calculateTotals = () => {
    const total = todoList.length;
    const done = todoList.reduce((acc, todo) => acc + (todo.completed ? 1 : 0), 0);
    
    setTotalTasks(total);
    setTotalDone(done);
  };

  function addToDo(newTodo:TodoItem){
    setTodoList([...todoList, newTodo])
  }

  function handleToggleCompleted(id: string, completed: boolean) {
    setTodoList(todoList.map(todo =>
      todo.id === id ? { ...todo, completed } : todo
    ));
  }

  function handleDeleteTask(id:string){
    const newTodoList = todoList.filter(todo=>{
      return todo.id !== id
    })
    setTodoList(newTodoList)
  }
  
  useEffect(() => {
    calculateTotals();
  }, [todoList]); 

  return (
    <main>
      <Header/>
      <section>
        <div className={styles.input}>
          <Input onAddComment={addToDo}/>
          <CountHeader
            totalTasks={totalTasks}
            totalTasksDone={totalDone}
          />
          {todoList.length > 0?(
            todoList.map(todo => {
              return(
                <TodoList
                  key={todo.id}
                  id={todo.id}
                  completed={todo.completed}
                  task={todo.task}
                  onCheckClicked={handleToggleCompleted}
                  onDeleteTask={handleDeleteTask}
                />
              )
            })
          ):(
            <EmptyBoard />
          )}

        </div>
      </section>
    </main>
  )
}

export default App
