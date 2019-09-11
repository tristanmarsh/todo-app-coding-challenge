import * as React from 'react'
import { Header } from './components/Header'
import { List } from './components/List'
import { TaskEditor } from './components/TaskEditor'
import { ViewFilter } from './components/ViewFilter'

export const App = () => (
  <>
    <Header />
    <List />
    <TaskEditor />
    <ViewFilter showComplete={false} />
  </>
)
