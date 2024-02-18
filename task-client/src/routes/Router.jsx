import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TasksPage from '../pages/TasksPage'
import TasksFormPage from '../pages/TasksFormPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/tasks' />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/create' element={<TasksFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}
