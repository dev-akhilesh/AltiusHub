import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import TaskPage from './pages/TaskPage'

function App() {

  return (
    <>
      <h1>Task Rabbit</h1>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/tasks' element={<TaskPage />} />

      </Routes>
    </>
  )
}

export default App
