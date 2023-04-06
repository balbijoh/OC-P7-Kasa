import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>
);