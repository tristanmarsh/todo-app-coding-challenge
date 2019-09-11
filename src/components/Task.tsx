import * as React from 'react'

export interface ITaskProps {
  id: number
  description: string
  isComplete?: boolean
}

const onTaskStatusClick = (id: number) =>
  console.error('Unimplemented function `onTaskStatusClick` invoked', { id })

const onTaskDescriptionClick = (id: number) =>
  console.error('Unimplemented function `onTaskDescriptionClick` invoked', {
    id,
  })

const onTaskOptionsClick = (id: number) =>
  console.error('Unimplemented function `onTaskOptionsClick` invoked', { id })

export const Task = ({ id, description, isComplete = false }: ITaskProps) => (
         <li className={`task ${isComplete ? 'is-complete' : ''}`}>
           <div
             onClick={e => onTaskStatusClick(id)}
             className="task task-status"
           ></div>{' '}
           <div
             onClick={e => onTaskDescriptionClick(id)}
             className="task task-description"
           >
             {description}
           </div>{' '}
           <div
             onClick={e => onTaskOptionsClick(id)}
             className="task task-options"
           ></div>
         </li>
       )
