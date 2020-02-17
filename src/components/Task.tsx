import * as React from 'react'
import { hasState } from '../App'

export interface ITaskProps extends hasState {
  id: number
  description: string
  isComplete: boolean
}

type Task = {
  id: number
  description: string
  isComplete: boolean
}


export const Task = ({ id, description, isComplete, state, setState }: ITaskProps) => {
  const toggleStatus = (task: Task): Task => ({...task, isComplete: !isComplete})

  const onTaskStatusClick = (taskId: number) => {
    const newTasks = state.tasks.reduce((acc, task) => ([
        ...acc, 
        (task.id === taskId
          ? toggleStatus(task)
          : task
        )]
    ), [])
    setState({
      ...state,
      tasks:newTasks
    })
  }

  const onTaskDescriptionClick = (taskId: number) =>
    console.error('Unimplemented function `onTaskDescriptionClick` invoked', {
      id,
    })

  const onTaskOptionsClick = (taskId: number) => {
    const confirmMessage = `Delete task '${state.tasks.find(task => task.id === id).description}'?`
    window.confirm(confirmMessage) && setState( {...state, tasks: state.tasks.filter(task => task.id !== id)})
  }
  
  return (
    <li className={`task ${isComplete ? 'is-complete' : ''}`}>
      <div onClick={e => onTaskStatusClick(id)} className="task-status"></div>

      <div
        onClick={e => onTaskDescriptionClick(id)}
        className="task-description"
      >
        {description}
      </div>

      <div onClick={e => onTaskOptionsClick(id)} className="task-options"></div>
    </li>
  )
  }
