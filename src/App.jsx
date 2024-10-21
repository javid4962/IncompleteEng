import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Engineering from './components/Engineering'
import Pharmacy from './components/Pharmacy';

function App() {
    return (
        <>
            {/* <Header />
            <Engineering /> */}

            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Engineering />} />
                    <Route path='/pharmacy' element={<Pharmacy />} />
                </Routes>
            </Router>
        </>

    )
}

export default App
