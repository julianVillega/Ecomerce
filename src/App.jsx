import { useState } from 'react';

import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
          <MyNavbar/>
        </header>
        <ItemListContainer greeting="Delira Con Todas Nuestras Promos !"/>
    </>
  )
}

export default App
