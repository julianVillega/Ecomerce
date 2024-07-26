import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { Detail } from './components/Detail';

function App() {
  return (
    <>

        <BrowserRouter>
          <header>
            <MyNavbar/>
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<Detail/>}/>
            <Route path='*' element={<h1>page not found</h1>}/>
          </Routes>
        </BrowserRouter>        

    </>
  )
}

export default App
