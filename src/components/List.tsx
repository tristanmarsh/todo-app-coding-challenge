import * as React from 'react'
import { Task } from './Task'

export const List = () => {
  return (
    <ul className="list">
      <Task id={1} description="foo" />
      <Task id={2} description="bar" isComplete={true} />
    </ul>
  )
}
