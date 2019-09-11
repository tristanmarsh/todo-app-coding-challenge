import * as React from 'react'

export const Header = ({ state }) => {
  const count = state.tasks.filter(task => !task.isComplete).length

  return (
    <header className="app-header">
      <h2 className="title">To Do App</h2>
      <strong className="tasks-counter">{count}</strong>
    </header>
  )
}
