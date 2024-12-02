import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="container my-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
