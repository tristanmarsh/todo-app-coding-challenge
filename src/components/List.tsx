import * as React from 'react'
import { Task } from './Task'
import { hasState } from '../App'

export const List = ({ state, setState }: hasState) => {
  const filteredTasks = state.showCompleted
    ? state.tasks.filter(task => task.isComplete == true)
    : state.tasks.filter(task => task.isComplete == false)
  return (
    <ul className="list">
      {filteredTasks.map(task => (
        <Task key={task.id} {...task} state={state} setState={setState} />
      ))}
    </ul>
  )
}
