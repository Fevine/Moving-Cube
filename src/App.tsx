import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainLayout from './Layouts/MainLayout'

function App() {

  return (
    <Routes>
      <Route path='/' Component={MainLayout}>
        <Route index Component={Home} />
      </Route>
    </Routes>
  )
}

export default App
