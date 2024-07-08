import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header className='row align-items-center position-relative'>
          <Navbar/>      
        </header>
    </>
  )
}

export default App
