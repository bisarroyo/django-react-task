import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TasksPage from './pages/TasksPage'
import TasksFormPage from './pages/TasksFormPage'

function App() {
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

export default App
