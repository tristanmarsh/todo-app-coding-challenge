import * as React from 'react'
import { Header } from './components/Header'
import { List } from './components/List'
import { TaskEditor } from './components/TaskEditor'
import { ViewFilter } from './components/ViewFilter'
import { Task } from './components/Task'

export type hasState = {
  state: IAppState
  setState: any
}

export interface IAppState {
  showCompleted?: boolean
  tasks: Task[]
}

const seedAppState: IAppState = {
  showCompleted: false,
  tasks: [
    {
      id: 0,
      description: 'Take a walk',
      isComplete: false,
    },
    {
      id: 1,
      description: 'Bake a pie',
      isComplete: false,
    },
    {
      id: 2,
      description: 'Enjoy life',
      isComplete: false,
    },
  ],
}

// Query storage or provide seed
const localStorage = JSON.parse(window.localStorage.getItem('todoData'))
const initialAppState = localStorage !== null ? localStorage : seedAppState

export const App = () => {
  const [state, updateState] = React.useState(initialAppState)

  // override setState from React.useState to save all changes to localStorage
  const setState = newState => {
    updateState(newState)
    window.localStorage.setItem('todoData', JSON.stringify(newState))
  }

  return (
    <div className="todo-app">
      <Header state={state} />
      <List state={state} setState={setState} />
      <TaskEditor state={state} setState={setState} />
      <ViewFilter state={state} setState={setState} />
    </div>
  )
}
