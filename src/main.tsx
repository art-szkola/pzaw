import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TaskList, taskData } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskList taskList = { taskData }/>
  </StrictMode>,
)
