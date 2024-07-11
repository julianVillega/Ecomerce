import { useState } from 'react'

import MyNavbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header className='row align-items-center position-relative'>
          <MyNavbar/>      
        </header>
    </>
  )
}

export default App
