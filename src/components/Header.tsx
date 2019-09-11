import * as React from 'react'

export const Header = () => {
  const count = 9

  return (
    <header className="app-header">
      <h1 className="title">To Do App</h1>
      <strong className="tasks-counter">{count}</strong>
    </header>
  )
}
