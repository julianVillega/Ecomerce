import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MyNavbar from './components/MyNavBar/MyNavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

import './App.css';
import { Detail } from './components/Detail/Detail';
import { CartContext } from './contexts/CartContextProvider';
import { CartPreview } from './components/CartPreview/CartPreview';
import { useContext } from 'react';

function App() {
    const { showCartPreview } = useContext(CartContext);
    return (
        <>
            <BrowserRouter>
                <header className='d-flex justify-content-between'>
                    <MyNavbar />
                    <CartWidget />
                </header>
                {showCartPreview && <CartPreview className='cart-preview' />}
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/detail/:productId' element={<Detail />} />
                    <Route path='*' element={<h1>page not found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
