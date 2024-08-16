import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { CartContextProvider } from './contexts/CartContextProvider.jsx';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA2oS3AYvmw044iJmtJZ-vrBmpsWeS2318',
    authDomain: 'coderhouse-ecomerce-4856a.firebaseapp.com',
    projectId: 'coderhouse-ecomerce-4856a',
    storageBucket: 'coderhouse-ecomerce-4856a.appspot.com',
    messagingSenderId: '136446601822',
    appId: '1:136446601822:web:6eebc1f79b4ac0cfca62cf',
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </React.StrictMode>
);
