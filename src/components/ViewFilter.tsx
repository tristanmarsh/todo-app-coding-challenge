import * as React from 'react'

interface IViewFilterProps {
  showComplete: boolean
}

export const ViewFilter = ({showComplete}: IViewFilterProps) => {
  const count = 9

  return (
    <nav>
      <button type="button">
        Show {showComplete ? 'Incomplete' : 'Complete'}
      </button>
    </nav>
  )
}
