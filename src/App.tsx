import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { TodoProvider } from './contexts/todoContext';
import Header from './components/header/Header';

function App() {
    return (
        <>
            <TodoProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </TodoProvider>
        </>
    );
}

export default App;
