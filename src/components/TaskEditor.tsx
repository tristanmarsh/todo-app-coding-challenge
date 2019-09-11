import * as React from 'react'
import { ITaskProps } from './Task'

export interface ITaskEditorProps {
  task?: ITaskProps
  isEditing?: boolean
}

const onFormSubmit = e => {
  e.preventDefault()
  console.error('unimplemented function `onFormSubmit` invoked', { e })
}

export const TaskEditor = ({ task, isEditing = false }: ITaskEditorProps) => (
  <div className={`task-editor ${isEditing ? 'is-editing' : ''}`}>
    <div className="task-editor-icon"></div>
    <form action={void 0} onSubmit={e => onFormSubmit(e)}>
      <input type="text" defaultValue={task ? task.description : ''} />
    </form>
  </div>
)
