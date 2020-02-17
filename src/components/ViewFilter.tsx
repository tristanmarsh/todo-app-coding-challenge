import * as React from 'react'
import { hasState } from '../App'

export const ViewFilter = ({ state, setState }: hasState) => {
  const toggleView = () => {
    const newState = { ...state, showCompleted: !state.showCompleted }
    setState(newState)
  }

  return (
    <nav className="navigation">
      <button type="button" onClick={() => toggleView()}>
        Show {state.showCompleted ? 'Incomplete' : 'Completed'}
      </button>
    </nav>
  )
}
