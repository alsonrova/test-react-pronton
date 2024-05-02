import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import PersonnalPage from './components/PersonnalPage'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <PersonnalPage />
    </div>
  )
}

export default App
