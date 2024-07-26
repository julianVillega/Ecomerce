import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { Detail } from './components/Detail';

function App() {
  return (
    <>
        <header>
          <MyNavbar/>
        </header>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<Detail/>}/>
          </Routes>
        </BrowserRouter>        

    </>
  )
}

export default App
