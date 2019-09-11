import * as React from 'react'
import { hasState } from '../App'

export const TaskEditor = ({ state, setState }: hasState) => {
  const isValid = (description: string) => !!description.trim()
  const isUnique = (description: string): boolean =>
    !state.tasks.find(task => task.description === description)
  const clearForm = () =>
    ((document.forms as any).taskForm.taskEditor.value = '')
  const focusInput = () => (document.forms as any).taskForm.taskEditor.focus()

  const onFormSubmit = e => {
    // Prevent page reload on form submission
    e.preventDefault()

    const description = (document.forms as any).taskForm.taskEditor.value

    // Ignore if whitespace
    if (!isValid(description)) {
      return
    }

    // Notify user and reject task if not unique
    if (!isUnique(description)) {
      window.alert(`Duplicate Task! '${description}' is already in the list`)
      return
    }

    // Derrive the new state containing the new task
    setState({
      ...state,
      tasks: [
        ...state.tasks,
        {
          id:
            state.tasks.length > 0
              ? Math.max(...state.tasks.map(task => task.id)) + 1
              : 0,
          description,
          isComplete: false,
        },
      ],
    })

    clearForm()

    // Lazily scroll into view
    Array.from(document.querySelectorAll('.task')).forEach(item =>
      (item as any).scrollIntoViewIfNeeded()
    )
  }

  return (
    <div className="task-editor">
      <div className="task-editor-icon" onClick={() => focusInput()} />
      <form name="taskForm" action={void 0} onSubmit={e => onFormSubmit(e)}>
        <input type="text" name="taskEditor" />
      </form>
    </div>
  )
}
