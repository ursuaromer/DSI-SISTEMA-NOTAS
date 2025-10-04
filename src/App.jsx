
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Forms/auth/Login'
import Student from './modules/student/components/student'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/*" element={<Student />} />
    </Routes>
  )
}

export default App
